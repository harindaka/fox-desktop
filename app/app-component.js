(function(app) {	
  app.AppComponent =
    ng.core.Component({
      selector: 'app-component',
      directives: [
        app.HomeComponent
      ],
      template: `
      	<home-component></home-component>
      `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));