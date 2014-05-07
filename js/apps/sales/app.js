// Generated by CoffeeScript 1.7.1
(function() {
  define(['app', 'marionette', 'apps/sales/tabs/controller', 'apps/sales/case/app'], function(App, Marionette, Controller, CaseApp) {
    var SalesApp;
    SalesApp = App.module('SalesApp', {
      startWithParent: false
    });
    SalesApp.on('start', function() {
      var controller;
      controller = new Controller();
      controller.showTabs(App.pagetabs);
      SalesApp.on('app:desks:started', controller.setCurrentApp, controller);
    });
    SalesApp.on('stop', function() {
      App.pagetabs.reset();
      SalesApp.currentApp = '';
    });
    SalesApp.startSubApps = function(appName) {
      var currentApp;
      currentApp = App.module(appName);
      if (SalesApp.currentApp === currentApp) {
        return;
      }
      if (SalesApp.currentApp) {
        SalesApp.currentApp.stop();
      }
      SalesApp.currentApp = currentApp;
      currentApp.start();
      SalesApp.trigger('app:desks:started', appName);
    };
    return SalesApp;
  });

}).call(this);
