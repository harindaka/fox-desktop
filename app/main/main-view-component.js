(function(app){
	app.MainViewComponent = ng.core.Component({
		selector: 'main-view-component',
		template: `
			<p>This is the main view component</p>
		`
	}).Class({
		constructor: function(){
			
		}
	});
})(window.app || (window.app = {}))