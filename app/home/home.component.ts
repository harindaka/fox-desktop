import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { HomeHeadingComponent } from './home-heading.component';
import { HomeAudioComponent } from './home-audio.component';
import { HomePlayButtonComponent } from './home-play-button.component';
import { HomeMenuComponent } from './home-menu.component';

import { LoaderService } from '../common/loader/loader.service';
import { ExternLibsService } from '../common/extern-libs/extern-libs.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  directives: [
  	HomeHeadingComponent,
  	HomeAudioComponent,
  	HomePlayButtonComponent,
  	HomeMenuComponent
  ],
  template: `    
    <home-heading></home-heading>
  	<home-audio></home-audio>
    <home-play-button></home-play-button>
    <home-menu></home-menu>
  `  
})
export class HomeComponent implements OnInit { 
  
  constructor(
    private _loaderService: LoaderService,
    private _externLibsService: ExternLibsService
    ){
    
  }

  ngOnInit(){
    this._loaderService.showLoader();
    
    let toastr = this._externLibsService.toastr();

    toastr.options.preventDuplicates = true;
    toastr.options.positionClass = "toast-bottom-right";
    toastr["info"]("Retrieving remote configuration...");

    this._loaderService.hideLoader();
  }
}