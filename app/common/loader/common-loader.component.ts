import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonLoaderService } from './common-loader.service';

@Component({
	selector: 'common-loader',
	template: `
		<div *ngIf="_isVisible" class="loader-modal">
      		<div class="loader-modal-overlay"></div>
      		<div class="loader-vertical-offset">
      			<div class="loader">Loading...</div>
      		</div>
      	</div>
	`
})
export class CommonLoaderComponent implements OnInit {
		
	_isVisible: boolean = false;

	constructor(private _commonLoaderService: CommonLoaderService) {
		
	}

	ngOnInit(){
		this._commonLoaderService.getLoaderVisibility().subscribe((visibleState)=>{
			this._isVisible = visibleState;
		});
	}
}