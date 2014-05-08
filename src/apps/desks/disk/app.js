// Generated by CoffeeScript 1.7.1
define(['app', 'marionette', 'apps/desks/disk/controller'], function(App, Marionette, Controller) {
  var DiskApp, DiskRouter;
  DiskApp = App.module('DesksApp.DiskApp', {
    startWithParent: false
  });
  DiskApp.on('stop', function() {
    return App.pageright.reset();
  });
  DiskRouter = Marionette.AppRouter.extend({
    before: function() {
      App.startSubApp('DesksApp');
      return App.DesksApp.startSubApps('DesksApp.DiskApp');
    },
    controller: Controller,
    appRoutes: {
      'desks-disk': 'DiskApp'
    }
  });
  App.addInitializer(function() {
    return new DiskRouter();
  });
  return DiskApp;
});
