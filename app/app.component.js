(function(app) {	
  app.AppComponent =
    ng.core.Component({
      selector: 'app-component',
      directives: [
        app.BooksComponent, 
        app.MainViewComponent
      ],
      template: `
      	<h1>My First Angular 2 App</h1>
      	<books>Loading Books...</books>
        <main-view-component>Loading Main View...</main-view-component>
      	`
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));