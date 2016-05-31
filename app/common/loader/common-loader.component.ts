import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
	selector: 'common-loader',
	template: `
		<div *ngIf="isVisible" class="loader-modal">
      		<div class="loader-modal-overlay"></div>
      		<div class="loader-vertical-offset">
      			<div class="loader">Loading...</div>
      		</div>
      	</div>
	`
})
export class CommonLoaderComponent implements OnInit {
	
	@Input() isVisible;

	constructor(){
		this.isVisible = false;
	}

	ngOnInit(){}
}