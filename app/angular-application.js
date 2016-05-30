(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platformBrowserDynamic.bootstrap(app.AppComponent);

    app.CommonLoaderComponent.visible = false;
  });
})(window.app || (window.app = {}));