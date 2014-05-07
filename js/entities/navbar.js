// Generated by CoffeeScript 1.7.1
(function() {
  define(['app', 'backbone', 'entities/_base/collections', 'entities/_base/models'], function(App, Backbone, EntitiesCollections, EntitiesModels) {
    var API, NavModel, NavbarCollection;
    NavModel = App.Entities.Model.extend();
    NavbarCollection = App.Entities.Collection.extend({
      model: NavModel,
      url: '/navbar.json'
    });
    API = {
      getAll: function() {
        var deferred;
        deferred = $.Deferred();
        this._getNavbar(function(navbarCollection) {
          deferred.resolve(navbarCollection);
        });
        return deferred.promise();
      },
      _getNavbar: function(callback) {
        var navbarCollection;
        navbarCollection = new NavbarCollection();
        navbarCollection.on('reset', callback);
        navbarCollection.fetch({
          reset: true
        });
      }
    };
    App.reqres.setHandler('navbar:entities', function() {
      return API.getAll();
    });
  });

}).call(this);
