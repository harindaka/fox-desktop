import { Component } from '@angular/core';
import { HomeHeadingComponent } from './home/home-heading.component';
import { HomeAudioComponent } from './home/home-audio.component';
import { HomePlayButtonComponent } from './home/home-play-button.component';
import { HomeMenuComponent } from './home/home-menu.component';

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
export class HomeComponent { }