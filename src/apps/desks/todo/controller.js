// Generated by CoffeeScript 1.7.1
define(['underscore', 'marionette', 'backbone', 'app', 'apps/desks/todo/content_view'], function(_, Marionette, Backbone, App, ContentView) {
  var controller;
  return controller = {
    TodoApp: function() {
      var contentview;
      contentview = new ContentView();
      return App.pagecontent.show(contentview);
    }
  };
});