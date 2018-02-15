import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, ToastController, AlertController, ModalController } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus';
import { SocialSharing } from '@ionic-native/social-sharing';

import { WebsocketService } from '../../app/websocket.service';
import { MessageService } from '../../app/message.service';

import { InstructionsPage } from '../instructions/instructions';
import { UserListPage } from '../user-list/user-list';

@Component({
	selector: 'page-camera',
	templateUrl: 'camera.html',
	providers: [ WebsocketService, MessageService ]
})

export class CameraPage {
	fileName: string;
	currentPath: string;
	newPath: string;
	newName: string;
	shareStatus: boolean = false;
	videoList: any[] = [];
	videoPathArray: string[] = [];
	currentItem: any;
	task: any;
	
	private errorString: string;

	constructor(public navCtrl: NavController,
				public toastCtrl: ToastController,
				public alertCtrl: AlertController,
				public modalCtrl: ModalController,
				private transfer: FileTransfer,
				private fileCtrl: File,
				private videoCapturePlus: VideoCapturePlus,
				private socialSharing: SocialSharing,
				private messageService: MessageService,
				public chngDetect: ChangeDetectorRef) {
					
		this.errorString = 'Error';
		messageService.messages.subscribe(msg => {			
			console.log("Response from websocket: " + msg);
			
			var msgStr = String(msg);
			
			if(String(msgStr) == 'connected') {
				
			} else {
				var responseObj = JSON.parse(msgStr);
				
				switch(responseObj.responseType){
					case 'signedPutUrl':
						let videoItem = this.videoList[this.videoList.length - 1];
					
						// Add upload data to video item for manual upload option
						videoItem.uploadData = responseObj;
						
						// Attempt to upload video item automatically
						this.uploadVideo(videoItem);
					break;

					case 'error':
						console.log(responseObj.message);
						
						// Display error to user
						let toast = this.toastCtrl.create({
							message: responseObj.message,
							duration: 3000,
							position: 'top'
						});
						toast.present();
					break;
				}
			}
		});
		
		this.task = setInterval(() => {
			this.sendMsg('ping');
		}, 30000);
	}
	
	ionViewDidLoad() {
		// Show instructions on page load
		this.presentModal();	
	}
	
	sendMsg(message) {
		//console.log('new message from client to websocket: ', message);
		this.messageService.messages.next(message);
	}
	
	presentModal() {
	    let modal = this.modalCtrl.create(InstructionsPage);
	    modal.present();
	}
	
	showPrompt() {
	    let prompt = this.alertCtrl.create({
	    	title: 'Video Name',
			message: "Enter a name for this video recording",
			inputs: [
	        	{
	        		name: 'name',
					placeholder: 'Video Name'
	        	}
			],
			buttons: [
	        	{
					text: 'Save',
					handler: data => {
						if(data.name != ''){
							this.newName = data.name.replace(/ /g, '_').replace(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').trim() + '.MOV';
							this.currentItem = {};
							this.currentItem.name = this.newName;
							this.currentItem.fullPath = this.newPath + this.newName;
							this.currentItem.uploadProgress = false;
							this.currentItem.uploadSuccess = false;
							this.currentItem.uploadFail = false;
							
							// Move video to application directory
							this.fileCtrl.moveFile(this.currentPath, this.fileName, this.newPath, this.newName).then(entry => {
								this.videoList.push(this.currentItem);
								this.videoPathArray.push(this.currentItem.fullPath);
								
								// Make Sharing all videos available
								this.shareStatus = true;
								
								// Get Amazon S3 URL for upload
								this.sendMsg('signedPutUrl ' + window.name.split('|')[2] + ' video/quicktime');
							}, error => console.log(error));
						} else {
							this.showPrompt();	
						}
					}
	        	}
			]
	    });
	    prompt.present();
	}
	
	takeVideo() {
		// Make sure that our video folder exists, and if not, create it.
		this.fileCtrl.checkDir(this.fileCtrl.documentsDirectory, 'pfhc_videos').then(exists => console.log('Video Folder Exists'), error => this.fileCtrl.createDir(this.fileCtrl.documentsDirectory, 'pfhc_videos', true).then(dirEntry => console.log(dirEntry), error => console.log('Could not create video directory')));

		// Capture video and if accepted, call saveVideo function
    	this.videoCapturePlus.captureVideo({
			limit: 1,
			highquality: true,
			portraitOverlay: 'assets/img/camera/overlay/portrait.png',
			landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
		}).then(mediafile => this.saveVideo(mediafile[0]), error => console.log('Something went wrong'));
	}
	
	// Move video file from tmp folder to our own app folder
	saveVideo(mediafile) {
		this.currentItem = mediafile
		
		this.fileName = mediafile.fullPath.substr(mediafile.fullPath.lastIndexOf('/') + 1);
		this.currentPath = this.fileCtrl.tempDirectory;
		this.newPath = this.fileCtrl.documentsDirectory + 'pfhc_videos/';
		
		// Prompt User to name video file
		this.showPrompt();
	}
	
	uploadVideo(uploadItem) {
		if(typeof uploadItem.uploadData.url == 'undefined'){
			this.sendMsg('signedPutUrl ' + window.name.split('|')[2] + ' video/quicktime');
		} else {
			let options: FileUploadOptions = {
				httpMethod: 'PUT',
			    fileName: uploadItem.name,
			    mimeType: 'video/quicktime',
			    chunkedMode: false,
			    headers: {
				    'Content-Type': 'video/quicktime'
			    }
			}
			
			uploadItem.fileTransfer = this.transfer.create();
			uploadItem.progress = 0;
			uploadItem.uploadSuccess = false;
			uploadItem.uploadFail = false;
			uploadItem.uploadProgress = true;
			
			uploadItem.fileTransfer.onProgress(event => {
				console.log(Math.floor(event.loaded/event.total * 100) + '%');
				uploadItem.progress = Math.floor(event.loaded/event.total * 100);
				this.chngDetect.detectChanges();
			});
			
			uploadItem.fileTransfer.upload(uploadItem.fullPath, uploadItem.uploadData.url, options).then((data) => {
				uploadItem.uploadProgress = false;
				uploadItem.uploadSuccess = true;
				
				this.sendMsg('registerAttachment ' + uploadItem.uploadData.userId + ' ' + uploadItem.uploadData.bucket + ' ' + uploadItem.uploadData.key);
				let toast = this.toastCtrl.create({
					message: 'Your video "' + uploadItem.name + '" was uploaded successfully',
					duration: 3000,
					position: 'top'
				});
				toast.present();
			}, (error) => {
				uploadItem.uploadProgress = false;
				uploadItem.uploadFail = true;
				
		    	if(error.body.indexOf('<Message>') != -1) {
			    	let actualStart = error.body.indexOf('<Message>') + 9;
			    	let strLength = error.body.indexOf('</Message>');
			    	this.errorString = error.body.substr(actualStart, (strLength - actualStart));
		    	} else {
			    	this.errorString = error.body != '' ? error.body : "Upload Failed."
		    	}
		    	
		    	let toast = this.toastCtrl.create({
					message: this.errorString,
					duration: 5000,
					position: 'top'
				});
				toast.present();
			});
		}
	}
	
	shareVideo(videoItem){
		this.socialSharing.share('Attached is a video recorded at the Puyallup Family History Center', 'Video Recording - Puyallup Family History Center', videoItem.fullPath);
	}
	
	shareAllVideos() {
		this.socialSharing.share('Attached is are videos recorded at the Puyallup Family History Center', 'Video Recordings - Puyallup Family History Center', this.videoPathArray);
	}
	
	// Remove video files from specified folders
	removeFiles(path, dirName, dirPath, entryArray){
		var x;
		for(x = 0; x < entryArray.length; x++){
			this.fileCtrl.removeFile(dirPath, entryArray[x].name);
		}
		this.fileCtrl.listDir(path, dirName).then(entry => console.log(entry), error => console.log('No temp file entry'));
	}
	
	logOut(){
		let confirm = this.alertCtrl.create({
	    	title: 'Are you sure?',
			message: 'By logging out, all videos from this session will be erased off of this device.',
			buttons: [
	        	{
					text: 'Cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
	        	},
				{
					text: 'Logout',
					handler: () => {
						console.log('Logout clicked');
			            // Clear video files from tmp and our app video storage folder
						if(this.videoList.length > 0) {
							this.fileCtrl.listDir(this.fileCtrl.tempDirectory.substr(0, this.fileCtrl.tempDirectory.lastIndexOf('/') - 3), 'tmp').then(entry => this.removeFiles(this.fileCtrl.tempDirectory.substr(0, this.fileCtrl.tempDirectory.lastIndexOf('/') - 3), 'tmp', this.fileCtrl.tempDirectory, entry), error => console.log(error));
						
							this.fileCtrl.listDir(this.newPath.substr(0, this.newPath.lastIndexOf('/') - 11), 'pfhc_videos').then(entry => this.removeFiles(this.newPath.substr(0, this.newPath.lastIndexOf('/') - 11), 'pfhc_videos', this.newPath, entry), error => console.log(error));
						}
						
						this.sendMsg('logout ' + window.name.split('|')[2]);
						
						window.name = '';
						
						this.navCtrl.push(UserListPage);
	        		}
	        	}
			]
	    });
	    
	    confirm.present();
	}
}
