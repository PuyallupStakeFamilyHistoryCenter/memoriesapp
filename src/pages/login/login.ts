import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { WebsocketService } from '../../app/websocket.service';
import { MessageService } from '../../app/message.service';

import { CameraPage } from '../camera/camera';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ WebsocketService, MessageService ]
})
export class LoginPage {
	
	account: { username: string, password: string } = {
    	username: '',
		password: ''
	};

	private loginErrorString: string;

	constructor(private messageService: MessageService, public navCtrl: NavController, public toastCtrl: ToastController) {
		this.loginErrorString = 'Failed to Log In';
		
		messageService.messages.subscribe(msg => {			
			//console.log("Response from websocket: " + msg);
			
			var msgStr = String(msg);
			
			if(String(msgStr) == 'connected') {
				
			} else {
				var responseObj = JSON.parse(msgStr);
				
				switch(responseObj.responseType){
					case 'token':
						window.name = window.name + '|' + responseObj.username + '|' + responseObj.token;
						this.navCtrl.push(CameraPage);
					break;
					
					case 'error':
						this.loginErrorString = responseObj.message;
					
						let toast = this.toastCtrl.create({
							message: this.loginErrorString,
							duration: 3000,
							position: 'top'
						});
						toast.present();
					break;
				}
			}
	
		});
	}
	
	ionViewDidLoad() {
		this.account.username = window.name;
	}
	
	sendMsg(message) {
		//console.log('new message from client to websocket: ', message);
		this.messageService.messages.next(message);
	}

	// Attempt to login in through our User service
	doLogin() {
		this.sendMsg("login " + this.account.username + " " + this.account.password);
	}
}
