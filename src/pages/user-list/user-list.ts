import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WebsocketService } from '../../app/websocket.service';
import { MessageService } from '../../app/message.service';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
  providers: [ WebsocketService, MessageService ]
})
export class UserListPage {
	currentUsers: any[];
	task: any;
	
	constructor(private messageService: MessageService, public navCtrl: NavController) {
		messageService.messages.subscribe(msg => {			
			//console.log("Response from websocket: " + msg);
			
			var msgStr = String(msg);
			
			if(String(msgStr) == 'connected') {
				this.sendMsg('list-current-users');
			} else {
				var responseObj = JSON.parse(msgStr);
				
				switch(responseObj.responseType){
					case 'user-list':
						this.currentUsers = responseObj.users;
					break;
				}
			}
	
		});
		
		this.currentUsers = new Array();
		
		this.task = setInterval(() => {
			this.sendMsg('ping');
		}, 30000);
	}
	
	sendMsg(message) {
		//console.log('new message from client to websocket: ', message);
		this.messageService.messages.next(message);
	}
	
	
	userLogin(user) {
		window.name = user.id;
		this.navCtrl.push(LoginPage);
	}
}