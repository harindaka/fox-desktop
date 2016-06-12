import { Injectable } from '@angular/core';

@Injectable()
export class NativeInterfaceService {
	constructor(){}

	private loadNpm(moduleName: string): any {
		try{
			return require(moduleName);
		}
		catch(e){
			return null;
		}
	}

	open(): void{
		let open = this.loadNpm('open');

	}

}