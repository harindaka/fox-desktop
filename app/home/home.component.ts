import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { HomeHeadingComponent } from './home-heading.component';
import { HomeAudioComponent } from './home-audio.component';
import { HomePlayButtonComponent } from './home-play-button.component';
import { HomeMenuComponent } from './home-menu.component';

import { CommonLoaderService } from '../common/loader/common-loader.service';

@Component({
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
  
  constructor(private _commonLoaderService: CommonLoaderService){
    
  }

  ngOnInit(){
    let showLoader: boolean = true;
    setInterval(()=> {
      if(showLoader){
        this._commonLoaderService.showLoader();
      }
      else{
        this._commonLoaderService.hideLoader();
      }

      showLoader = !showLoader;
    }, 3000);    
  }
}