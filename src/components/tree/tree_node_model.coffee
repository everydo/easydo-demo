define [
    'underscore'
    'backbone'
], (_, Backbone) ->
    Backbone.Model.extend initialize: ->
        nodes = @get 'nodes'
        if nodes
            TreeNodeCollection = require 'components/tree/tree_node_collection'
            @nodes = new TreeNodeCollection nodes
            @unset 'nodes'