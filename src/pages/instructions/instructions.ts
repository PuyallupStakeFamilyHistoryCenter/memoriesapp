import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
	selector: 'page-instructions',
	templateUrl: 'instructions.html'
})

export class InstructionsPage {
	
	constructor(public viewCtrl: ViewController) { 
		
	}
	
	dismiss() {
	   this.viewCtrl.dismiss();
	}
}