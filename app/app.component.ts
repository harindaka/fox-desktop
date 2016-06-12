import { Component } from '@angular/core';
import 'rxjs/Rx';
import { HomeComponent } from './home/home.component';
import { LoaderComponent } from './common/loader/loader.component';

import { LoaderService } from './common/loader/loader.service';
import { NativeInterfaceService } from './common/native-interface/native-interface.service';
import { ExternLibsService } from './common/extern-libs/extern-libs.service';

@Component({
  selector: 'app',
  directives: [
  	LoaderComponent,
  	HomeComponent
  ],
  template: ` 
  	<loader></loader>  
    <home></home>    
  `, 
  providers: [
    LoaderService,
    NativeInterfaceService,
    ExternLibsService
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