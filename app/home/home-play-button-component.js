(function(app){
	app.HomePlayButtonComponent = ng.core.Component({
		selector: 'home-play-button-component',
		template: `
	      	<div id="container_button">
		        <div id="hole">
		            <div id="button">
		                <div id="triangle"></div>
		                <div id="lighter_triangle"></div>
		                <div id="darker_triangle"></div>
		            </div>
		        </div>
		    </div>
		`
	}).Class({
		constructor: function(){}
	});
})(window.app || (window.app = {}))