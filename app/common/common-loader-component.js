(function(app){
	app.CommonLoaderComponent = ng.core.Component({
		selector: 'common-loader-component',
		template: `
	      	<div *ngIf="visible" class="loader-modal">
	      		<div class="loader-modal-overlay"></div>
	      		<div class="loader-vertical-offset">
	      			<div class="loader">Loading...</div>
	      		</div>
	      	</div>
		`
	}).Class({
		constructor: function(){
			this.visible = false;
			this.show = function(){
				this.visible = true;
			}
		},
	});

	console.log(app.CommonLoaderComponent);
})(window.app || (window.app = {}))