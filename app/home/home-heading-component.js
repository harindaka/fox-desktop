(function(app){
	app.HomeHeadingComponent = ng.core.Component({
		selector: 'home-heading-component',
		template: `
	    	<div class="heading">
		        <h1 id="heading" align="center">Fox 91.4</h1>
		    </div>
		`
	}).Class({
		constructor: function(){}
	});
})(window.app || (window.app = {}))