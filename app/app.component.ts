import { Component } from '@angular/core';
import 'rxjs/Rx';
import { HomeComponent } from './home/home.component';
import { CommonLoaderComponent } from './common/loader/common-loader.component';

import { CommonLoaderService } from './common/loader/common-loader.service';

declare var $: any;
declare var jQuery: any;
declare var toastr: any;

@Component({
  selector: 'app',
  directives: [
  	CommonLoaderComponent,
  	HomeComponent
  ],
  template: ` 
  	<common-loader></common-loader>  
    <home></home>    
  `, 
  providers: [
    CommonLoaderService
  ] 
})
export class AppComponent{ 
	loader: any;
	
	constructor(){
		this.loader = {
			isVisible: true
		};
	}
} 