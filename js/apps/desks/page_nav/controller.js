define([
  'underscore',
  'marionette',
  'backbone',
  'apps/desks/page_nav/left_view'
], function(_, Marionette, Backbone, LeftView) {

  var Controller = Marionette.Controller.extend({
    showPageNav: function(regions) {
      this.leftview = new LeftView();
      regions.show(this.leftview);
    },
    setCurrentApp: function(appName) {
      this.leftview.setCurrent(appName);
    }
  });

  return Controller;

});