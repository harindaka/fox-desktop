(function(app) {
  app.BooksComponent =
    ng.core.Component({
      selector: 'books',
      template: `
      	<ul>
      		<li *ngFor="let book of books">{{ book }}</li>
      	</ul>
      	`
    })
    .Class({    	
      	constructor: function() {
      		this.books = ['Book1', 'Book2', 'Book3'];
      	}
    });
})(window.app || (window.app = {}));