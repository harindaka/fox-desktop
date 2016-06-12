import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
	moduleId: module.id,
	selector: 'loader',
	styleUrls: ['loader.style.css'],
	template: `
		<div *ngIf="_isVisible" class="loader-modal">
      		<div class="loader-modal-overlay"></div>
      		<div class="loader-vertical-offset">
      			<div class="loader">Loading...</div>
      		</div>
      	</div>
	`
})
export class LoaderComponent implements OnInit {
		
	_isVisible: boolean = false;

	constructor(private _loaderService: LoaderService) {
		
	}

	ngOnInit(){
		this._loaderService.getLoaderVisibility().subscribe((visibleState)=>{
			this._isVisible = visibleState;
		});
	}
}