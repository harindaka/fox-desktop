(function(app) {	
  app.AppComponent =
    ng.core.Component({
      selector: 'app-component',
      directives: [
        app.CommonLoaderComponent,
        app.HomeComponent
      ],
      template: `
        <common-loader-component></common-loader-component>
      	<home-component></home-component>
      `
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));