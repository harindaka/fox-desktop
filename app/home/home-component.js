(function(app){
	app.HomeComponent = ng.core.Component({
		selector: 'home-component',
		directives: [
	    	app.HomeHeadingComponent,
	    	app.HomeAudioComponent,
	    	app.HomePlayButtonComponent,
	    	app.HomeMenuComponent
	    ],
		template: `
	      	<home-heading-component></home-heading-component>
	      	<home-audio-component></home-audio-component>
	        <home-play-button-component></home-play-button-component>
	        <home-menu-component></home-menu-component>
		`
	}).Class({
		constructor: function(){}
	});
})(window.app || (window.app = {}))