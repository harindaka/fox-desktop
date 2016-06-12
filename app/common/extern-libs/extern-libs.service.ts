import { Injectable } from '@angular/core';

declare var $: any;
declare var jQuery: any;
declare var toastr: any;

@Injectable()
export class ExternLibsService {
	constructor() { }

	jquery(): any {
		return $;
	}

	toastr(): any {
		return toastr;
	}	
}