import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const SOCKET_URL = 'ws://sea0mbp2447.local:8080/';

export interface Message {
	message: string
}

@Injectable()
export class MessageService {
	public messages: Subject<Message>;
	
	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(SOCKET_URL)
			.map((response: MessageEvent): Message => {
				return response.data;
			});
	}

}
