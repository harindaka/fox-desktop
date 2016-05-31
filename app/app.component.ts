import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CommonLoaderComponent } from './common/loader/common-loader.component';

@Component({
  selector: 'app',
  directives: [
  	CommonLoaderComponent,
  	HomeComponent
  ],
  template: ` 
  	<common-loader [isVisible]="loader.isVisible"></common-loader>  
    <home [loader]="loader"></home>    
  `  
})
export class AppComponent{ 
	loader: any;
	
	constructor(){
		this.loader = {
			isVisible: false
		};
	}
} 