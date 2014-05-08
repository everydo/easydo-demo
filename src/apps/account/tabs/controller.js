// Generated by CoffeeScript 1.7.1
define(['underscore', 'marionette', 'backbone', 'apps/account/tabs/tabs_view'], function(_, Marionette, Backbone, TabsView) {
  var Controller;
  return Controller = Marionette.Controller.extend({
    showTabs: function(regions) {
      this.tabsview = new TabsView();
      return regions.show(this.tabsview);
    },
    setCurrentApp: function(appName) {
      return this.tabsview.setCurrent(appName);
    }
  });
});
