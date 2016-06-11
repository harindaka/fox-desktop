import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonLoaderService{

	_isVisible: Subject<boolean> = null;

	constructor(){
		this._isVisible = new Subject<boolean>();
	}

	showLoader(){
		this._isVisible.next(true);
	}

	hideLoader() {
		this._isVisible.next(false);
	}

	getLoaderVisibility(): Observable<boolean>{
		return this._isVisible;
	}
}