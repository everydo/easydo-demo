// Generated by CoffeeScript 1.7.1
define(['app', 'marionette', 'apps/account/orgtree/controller'], function(App, Marionette, Controller) {
  var OrgtreeApp, OrgtreeRouter;
  OrgtreeApp = App.module('AccountApp.OrgtreeApp', {
    startWithParent: false
  });
  OrgtreeApp.on('start', function() {
    return Controller.orgTreeApp();
  });
  OrgtreeApp.on('stop', function() {
    return App.pageleft.reset();
  });
  OrgtreeRouter = Marionette.AppRouter.extend({
    before: function() {
      App.startSubApp('AccountApp');
      return App.AccountApp.startSubApps('AccountApp.OrgtreeApp');
    },
    controller: Controller,
    appRoutes: {
      'account-orgtree-:id': 'treeNode'
    }
  });
  App.addInitializer(function() {
    return App.router = new OrgtreeRouter();
  });
  return OrgtreeApp;
});
