define([
  'underscore',
  'marionette',
], function(_, Marionette) {

  return Marionette.ItemView.extend({

    template: _.template("子节点"),
  });

});