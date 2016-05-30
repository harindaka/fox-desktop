(function(app){
	app.HomeAudioComponent = ng.core.Component({
		selector: 'home-audio-component',
		template: `
	      	<audio id="audio">
		        <source src="" type="audio/mpeg" />
		    </audio>
		`
	}).Class({
		constructor: function(){}
	});
})(window.app || (window.app = {}))