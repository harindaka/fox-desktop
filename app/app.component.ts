import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app',
  directives: [
  	HomeComponent
  ],
  template: `    
      <home></home>
  `  
})
export class AppComponent { }