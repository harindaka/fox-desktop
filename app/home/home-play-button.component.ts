import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Component({
  moduleId: module.id,
  selector: 'home-play-button',
  template: `    
    <div id="container_button">
        <div id="hole">
            <div id="button" (click)="togglePlay()">
                <div id="triangle"></div>
                <div id="lighter_triangle"></div>
                <div id="darker_triangle"></div>
            </div>
        </div>
    </div>
  `  
})
export class HomePlayButtonComponent { 
  constructor(){}

  togglePlay(): void{
    

    var observableChain = Observable.create((observer) => {
      setTimeout(() => {
        observer.next(1);
        observer.complete();
      }, 1000);
    }).flatMap((result) => {
      console.log(result);

      return Observable.create((observer) => {
        setTimeout(() => {
          observer.next(result + 2);
          observer.complete()
        }, 1000);
      });
    }).flatMap((result) => {
      console.log(result);

      return Observable.create((observer) => {
        setTimeout(() => {
          observer.next(result + 3);
          observer.complete()
        }, 1000);
      });
    });

    observableChain.subscribe((finalResult) => {
      console.log(finalResult);
    });

    observableChain.subscribe((finalResult) => {
      console.log(finalResult);
    });


    // var promiseChain = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(1);
    //   }, 1000);
    // }).then((result) => {
    //   console.log(result);

    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(result + 2);
    //     }, 1000);
    //   });
    // }).then((result) => {
    //   console.log(result);

    //   return new Promise((resolve, reject) => {
    //       setTimeout(() => {
    //       resolve(result + 3);
    //         }, 1000);
    //   });
    // });

    // promiseChain.then((finalResult) => {
    //   console.log(finalResult);
    // });
  }

}