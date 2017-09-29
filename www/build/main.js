webpackJsonp([0],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_websocket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_message_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(255);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserListPage = (function () {
    function UserListPage(messageService, navCtrl) {
        var _this = this;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        messageService.messages.subscribe(function (msg) {
            //console.log("Response from websocket: " + msg);
            var msgStr = String(msg);
            if (String(msgStr) == 'connected') {
                _this.sendMsg('list-current-users');
            }
            else {
                var responseObj = JSON.parse(msgStr);
                switch (responseObj.responseType) {
                    case 'user-list':
                        _this.currentUsers = responseObj.users;
                        break;
                }
            }
        });
        this.currentUsers = new Array();
    }
    UserListPage.prototype.sendMsg = function (message) {
        //console.log('new message from client to websocket: ', message);
        this.messageService.messages.next(message);
    };
    UserListPage.prototype.userLogin = function (user) {
        window.name = user.id;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    return UserListPage;
}());
UserListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-list',template:/*ion-inline-start:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/user-list/user-list.html"*/'<ion-header>\n	<ion-toolbar>\n    	<ion-title>User List</ion-title>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n    	<ion-item-sliding *ngFor="let item of currentUsers">\n			<button ion-item (click)="userLogin(item)">\n				<h2>{{ item.name }}</h2>  \n			</button>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-buttons end>\n			<button ion-button icon-right color="royal" (click)="sendMsg(\'list-current-users\')">\n				Refresh\n				<ion-icon name="refresh"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/user-list/user-list.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_3__app_message_service__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], UserListPage);

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__websocket_service__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SOCKET_URL = 'ws://sea0mbp2447.local:8080/';
var MessageService = (function () {
    function MessageService(wsService) {
        this.messages = wsService
            .connect(SOCKET_URL)
            .map(function (response) {
            return response.data;
        });
    }
    return MessageService;
}());
MessageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__websocket_service__["a" /* WebsocketService */]])
], MessageService);

//# sourceMappingURL=message.service.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_websocket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_message_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__camera_camera__ = __webpack_require__(256);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(messageService, navCtrl, toastCtrl) {
        var _this = this;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.account = {
            username: '',
            password: ''
        };
        this.loginErrorString = 'Failed to Log In';
        messageService.messages.subscribe(function (msg) {
            //console.log("Response from websocket: " + msg);
            var msgStr = String(msg);
            if (String(msgStr) == 'connected') {
            }
            else {
                var responseObj = JSON.parse(msgStr);
                switch (responseObj.responseType) {
                    case 'token':
                        window.name = window.name + '|' + responseObj.username + '|' + responseObj.token;
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__camera_camera__["a" /* CameraPage */]);
                        break;
                    case 'error':
                        _this.loginErrorString = responseObj.message;
                        var toast = _this.toastCtrl.create({
                            message: _this.loginErrorString,
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        break;
                }
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.account.username = window.name;
    };
    LoginPage.prototype.sendMsg = function (message) {
        //console.log('new message from client to websocket: ', message);
        this.messageService.messages.next(message);
    };
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        this.sendMsg("login " + this.account.username + " " + this.account.password);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Log In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	\n	<ion-list>\n\n		<ion-item>\n		    <ion-input type="hidden" [(ngModel)]="account.username" name="username" placeholder="Username"></ion-input>\n		</ion-item>\n		\n		<ion-item>\n		    <ion-input type="password" [(ngModel)]="account.password" name="password" placeholder="PIN"></ion-input>\n		</ion-item>\n	\n	\n	    <div padding>\n	        <button ion-button color="primary" (click)="doLogin()" block>Log In</button>\n	    </div>\n\n	</ion-list>\n\n</ion-content>	'/*ion-inline-end:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_3__app_message_service__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_video_capture_plus__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_websocket_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_message_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__instructions_instructions__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_list_user_list__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CameraPage = (function () {
    function CameraPage(navCtrl, toastCtrl, alertCtrl, modalCtrl, transfer, fileCtrl, videoCapturePlus, socialSharing, messageService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.fileCtrl = fileCtrl;
        this.videoCapturePlus = videoCapturePlus;
        this.socialSharing = socialSharing;
        this.messageService = messageService;
        this.shareStatus = false;
        this.videoList = [];
        this.videoPathArray = [];
        this.fileTransfer = this.transfer.create();
        this.errorString = 'Error';
        messageService.messages.subscribe(function (msg) {
            console.log("Response from websocket: " + msg);
            var msgStr = String(msg);
            if (String(msgStr) == 'connected') {
            }
            else {
                var responseObj = JSON.parse(msgStr);
                switch (responseObj.responseType) {
                    case 'signedPutUrl':
                        var videoItem = _this.videoList[_this.videoList.length - 1];
                        // Add upload data to video item for manual upload option
                        videoItem.uploadData = responseObj;
                        // Attempt to upload video item automatically
                        _this.uploadVideo(videoItem);
                        break;
                    case 'error':
                        console.log(responseObj.message);
                        // Display error to user
                        var toast = _this.toastCtrl.create({
                            message: responseObj.message,
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        break;
                }
            }
        });
        /*this.fileTransfer.onProgress(event => {
            
        });*/
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        // Show instructions on page load
        this.presentModal();
    };
    CameraPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__instructions_instructions__["a" /* InstructionsPage */]);
        modal.present();
    };
    CameraPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.name != '') {
                            _this.newName = data.name.replace(/ /g, '_').replace(/[`~!@#$%^&*()|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').trim() + '.MOV';
                            _this.currentItem.name = _this.newName;
                            _this.currentItem.fullPath = _this.newPath + _this.newName;
                            _this.currentItem.uploadProgress = false;
                            _this.currentItem.uploadSuccess = false;
                            _this.currentItem.uploadFail = false;
                            // Move video to application directory
                            _this.fileCtrl.moveFile(_this.currentPath, _this.fileName, _this.newPath, _this.newName).then(function (entry) {
                                _this.videoList.push(_this.currentItem);
                                _this.videoPathArray.push(_this.currentItem.fullPath);
                                // Make Sharing all videos available
                                _this.shareStatus = true;
                                // Get Amazon S3 URL for upload
                                _this.sendMsg('signedPutUrl ' + window.name.split('|')[2] + ' video/quicktime');
                            }, function (error) { return console.log(error); });
                        }
                        else {
                            _this.showPrompt();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    CameraPage.prototype.sendMsg = function (message) {
        //console.log('new message from client to websocket: ', message);
        this.messageService.messages.next(message);
    };
    CameraPage.prototype.takeVideo = function () {
        var _this = this;
        // Make sure that our video folder exists, and if not, create it.
        this.fileCtrl.checkDir(this.fileCtrl.documentsDirectory, 'pfhc_videos').then(function (exists) { return console.log('Video Folder Exists'); }, function (error) { return _this.fileCtrl.createDir(_this.fileCtrl.documentsDirectory, 'pfhc_videos', true).then(function (dirEntry) { return console.log(dirEntry); }, function (error) { return console.log('Could not create video directory'); }); });
        // Capture video and if accepted, call saveVideo function
        this.videoCapturePlus.captureVideo({
            limit: 120,
            highquality: true,
            portraitOverlay: 'assets/img/camera/overlay/portrait.png',
            landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
        }).then(function (mediafile) { return _this.saveVideo(mediafile[0]); }, function (error) { return console.log('Something went wrong'); });
    };
    // Move video file from tmp folder to our own app folder
    CameraPage.prototype.saveVideo = function (mediafile) {
        this.currentItem = mediafile;
        this.fileName = mediafile.fullPath.substr(mediafile.fullPath.lastIndexOf('/') + 1);
        this.currentPath = this.fileCtrl.tempDirectory;
        this.newPath = this.fileCtrl.documentsDirectory + 'pfhc_videos/';
        // Prompt User to name video file
        this.showPrompt();
    };
    CameraPage.prototype.uploadVideo = function (uploadItem) {
        var _this = this;
        var options = {
            httpMethod: 'PUT',
            fileName: uploadItem.name,
            mimeType: 'video/quicktime',
            chunkedMode: false,
            headers: {
                'Content-Type': 'video/quicktime'
            }
        };
        uploadItem.uploadSuccess = false;
        uploadItem.uploadFail = false;
        uploadItem.uploadProgress = true;
        this.fileTransfer.upload(uploadItem.fullPath, uploadItem.uploadData.url, options).then(function (data) {
            uploadItem.uploadProgress = false;
            uploadItem.uploadSuccess = true;
            console.log('registerAttachment ' + uploadItem.uploadData.userId + ' ' + uploadItem.uploadData.bucket + ' ' + uploadItem.uploadData.key);
            _this.sendMsg('registerAttachment ' + uploadItem.uploadData.userId + ' ' + uploadItem.uploadData.bucket + ' ' + uploadItem.uploadData.key);
            var toast = _this.toastCtrl.create({
                message: 'Your video "' + uploadItem.name + '" was uploaded successfully',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }, function (error) {
            uploadItem.uploadProgress = false;
            uploadItem.uploadFail = true;
            if (error.body.indexOf('<Message>') != -1) {
                var actualStart = error.body.indexOf('<Message>') + 9;
                var strLength = error.body.indexOf('</Message>');
                _this.errorString = error.body.substr(actualStart, (strLength - actualStart));
            }
            else {
                _this.errorString = error.body != '' ? error.body : "Upload Failed.";
            }
            var toast = _this.toastCtrl.create({
                message: _this.errorString,
                duration: 5000,
                position: 'top'
            });
            toast.present();
        });
    };
    CameraPage.prototype.shareVideo = function (videoItem) {
        this.socialSharing.share('Attached is a video recorded at the Puyallup Family History Center', 'Video Recording - Puyallup Family History Center', videoItem.fullPath);
    };
    CameraPage.prototype.shareAllVideos = function () {
        this.socialSharing.share('Attached is are videos recorded at the Puyallup Family History Center', 'Video Recordings - Puyallup Family History Center', this.videoPathArray);
    };
    // Remove video files from specified folders
    CameraPage.prototype.removeFiles = function (path, dirName, dirPath, entryArray) {
        var x;
        for (x = 0; x < entryArray.length; x++) {
            this.fileCtrl.removeFile(dirPath, entryArray[x].name);
        }
        this.fileCtrl.listDir(path, dirName).then(function (entry) { return console.log(entry); }, function (error) { return console.log('No temp file entry'); });
    };
    CameraPage.prototype.logOut = function () {
        var _this = this;
        // Clear video files from tmp and our app video storage folder
        if (this.videoList.length > 0) {
            this.fileCtrl.listDir(this.fileCtrl.tempDirectory.substr(0, this.fileCtrl.tempDirectory.lastIndexOf('/') - 3), 'tmp').then(function (entry) { return _this.removeFiles(_this.fileCtrl.tempDirectory.substr(0, _this.fileCtrl.tempDirectory.lastIndexOf('/') - 3), 'tmp', _this.fileCtrl.tempDirectory, entry); }, function (error) { return console.log(error); });
            this.fileCtrl.listDir(this.newPath.substr(0, this.newPath.lastIndexOf('/') - 11), 'pfhc_videos').then(function (entry) { return _this.removeFiles(_this.newPath.substr(0, _this.newPath.lastIndexOf('/') - 11), 'pfhc_videos', _this.newPath, entry); }, function (error) { return console.log(error); });
        }
        this.sendMsg('logout ' + window.name.split('|')[2]);
        window.name = '';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__user_list_user_list__["a" /* UserListPage */]);
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-camera',template:/*ion-inline-start:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/camera/camera.html"*/'<ion-header>\n	<ion-toolbar>\n		<ion-title>\n			Video Capture\n		</ion-title>\n		<ion-buttons end>\n		      <button ion-button icon-only color="royal" (click)="logOut()">\n		        	<ion-icon name="ios-log-out-outline"></ion-icon>\n		      </button>\n	    </ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<h5>Recordings:</h5>\n	<ion-list>\n		<ion-item-sliding *ngFor="let item of videoList">\n			<ion-item>\n				<ion-spinner *ngIf="item.uploadProgress" name="crescent"></ion-spinner>\n				<ion-icon icon-only *ngIf="item.uploadSuccess" name="ios-checkmark-circle-outline" color="secondary"></ion-icon>\n				<ion-icon icon-only *ngIf="item.uploadFail" name="ios-close-circle-outline" color="danger"></ion-icon>\n				&nbsp;\n				{{ item.name }}\n				<button ion-button icon-only clear item-end>\n					<ion-icon name="more"></ion-icon>\n				</button>\n			</ion-item>\n			<ion-item-options icon-start>\n				<button ion-button color="light" (click)="uploadVideo(item)">\n					Upload\n				</button>\n				<button ion-button (click)="shareVideo(item)">\n					<ion-icon name="ios-share-alt"></ion-icon>\n					Share\n				</button>\n			</ion-item-options>\n		</ion-item-sliding>\n	</ion-list>\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-buttons start>\n		      <button ion-button color="royal" (click)="presentModal()">\n		        	Instructions\n		      </button>\n	    </ion-buttons>\n		<ion-title>\n		    <button ion-button icon-only color="royal" (click)="takeVideo()">\n		    	<ion-icon name="camera"></ion-icon>\n		    </button>\n		</ion-title>\n		<ion-buttons end>\n		      <button ion-button icon-only *ngIf="shareStatus" color="royal" (click)="shareAllVideos()">\n		        	<ion-icon name="ios-share-outline"></ion-icon>\n		      </button>\n	    </ion-buttons>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/camera/camera.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_7__app_message_service__["a" /* MessageService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_video_capture_plus__["a" /* VideoCapturePlus */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_7__app_message_service__["a" /* MessageService */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstructionsPage = (function () {
    function InstructionsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    InstructionsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return InstructionsPage;
}());
InstructionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-instructions',template:/*ion-inline-start:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/instructions/instructions.html"*/'<ion-header>\n	<ion-toolbar>\n	    <ion-buttons start>\n		    <button ion-button color="primary" (click)="dismiss()">\n		        Close\n		    </button>\n	    </ion-buttons>\n	    <ion-title>Instructions</ion-title>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n	<p>Welcome to the Puyallup Family History Center Recording Room! We hope you enjoy your experience here. With our Memories App you can record multiple video memories during your session/visit. Below are instructions of how to record a video memory.</p>\n	<ol>\n		<li>Click the camera button to access the camera for video recording.</li>\n		<br>\n		<li>After you record your video you will be prompted to use the video recording or retake it. If it wasn\'t the best take, or if you would like to redo the recording, simply choose <em>Retake</em> and you will be returned to the camera.</li>\n		<br>\n		<li>When you capture the recording you want, simply choose <em>Use Video</em>.</li>\n		<br>\n		<li>You will then be prompted to name the video file. Specify a name and tap the <em>Save</em> button.</li>\n		<br>\n		<li>The video file will automatically be uploaded to our storage server. When you log out after your session/visit, a link to your memory recording(s) will be sent to you via email. Optionally, you may also choose to share your video(s) via other methods.</li>\n	</ol>\n</ion-content>'/*ion-inline-end:"/Users/jordan.hunter/angular_apps/memoriesApp/src/pages/instructions/instructions.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
], InstructionsPage);

//# sourceMappingURL=instructions.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_capture_plus__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_user_list_user_list__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_instructions_instructions__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_user_list_user_list__["a" /* UserListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_instructions_instructions__["a" /* InstructionsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_user_list_user_list__["a" /* UserListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_instructions_instructions__["a" /* InstructionsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_capture_plus__["a" /* VideoCapturePlus */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_user_list_user_list__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_user_list_user_list__["a" /* UserListPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/jordan.hunter/angular_apps/memoriesApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/jordan.hunter/angular_apps/memoriesApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebsocketService = (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var ws = new WebSocket(url);
        var observable = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(data);
                }
            }
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"].create(observer, observable);
    };
    return WebsocketService;
}());
WebsocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], WebsocketService);

//# sourceMappingURL=websocket.service.js.map

/***/ })

},[258]);
//# sourceMappingURL=main.js.map