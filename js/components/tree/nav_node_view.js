// Generated by CoffeeScript 1.7.1
(function() {
  define(['underscore', 'marionette', 'text!components/tree/tmpl/node.html'], function(_, Marionette, Template) {
    return Marionette.CompositeView.extend({
      template: _.template(Template),
      tagName: 'ul',
      initialize: function(options) {
        this.collection = this.model.nodes;
        this.controller = options.controller;
        this.controller.nodeList[this.model.id] = this;
        this.on('click:toggle', this._onToggle);
        this.on('click:checkbox', this._clickCheckbox);
        this.on('click:node', this._clickNode);
      },
      _clickCheckbox: function(node) {
        var checked, nodeName;
        nodeName = node.model.get('nodeName');
        checked = $('#checkbox-' + node.model.get('id')).prop('checked');
        if (checked) {
          this.controller.checkedNode[nodeName] = node.view;
        } else {
          delete this.controller.checkedNode[nodeName];
        }
      },
      _clickNode: function(node) {
        this.activate();
        this.controller.trigger('clicknode', node.view);
      },
      _onToggle: function(node) {
        if (this.isExpanded()) {
          this.collapse();
        } else {
          this.expand();
        }
      },
      triggers: {
        'click .toggle-icon': 'click:toggle',
        'click a': 'click:node',
        'click .node-checkbox': {
          event: 'click:checkbox',
          preventDefault: false,
          stopPropagation: true
        }
      },
      load_nodes: function(data) {
        this.collection.add(data);
        if (this.on_loaded) {
          this.on_loaded(this);
          this.on_loaded = null;
        }
      },
      serializeData: function() {
        var checkable;
        checkable = this.model.get('checkable');
        if (typeof checkable === 'undefined') {
          checkable = this.controller.checkable;
        }
        return {
          id: this.model.get('id'),
          icon: this.model.get('icon'),
          nodeName: this.model.get('nodeName'),
          is_folder: this.model.get('is_folder'),
          checkable: checkable
        };
      },
      itemViewOptions: function() {
        return {
          controller: this.controller
        };
      },
      appendHtml: function(collectionView, itemView) {
        collectionView.$('li:first').append(itemView.el);
      },
      isExpanded: function() {
        return $(this.el).find('span').first().attr('class').indexOf('plus') <= -1;
      },
      expand: function(on_expanded) {
        if (!this.collection.length) {
          this.on_loaded = on_expanded;
          if (!this.controller.is_static && this.model.get('is_folder')) {
            this.controller.trigger('load', this, this.model);
          } else {
            if (on_expanded) {
              on_expanded(this);
            }
          }
        } else {
          if (on_expanded) {
            on_expanded(this);
          }
        }
        $(this.el).find('span').first().addClass('icon-minus').removeClass('icon-plus');
        $(this.el).children().children().filter('ul').show('fast');
      },
      collapse: function() {
        $(this.el).find('span').first().addClass('icon-plus').removeClass('icon-minus');
        $(this.el).children().children().filter('ul').hide('fast');
      },
      activate: function() {
        var currentActive, lastActive;
        lastActive = this.controller.currentNode;
        if (lastActive) {
          lastActive = lastActive.model.get('id');
        }
        currentActive = this.model.get('id');
        if (lastActive === currentActive) {
          return;
        } else {
          $('.navtree .node-a-' + lastActive).find('div').removeClass('node-active');
          $(this.el).find('.node').first().addClass('node-active');
          this.controller.currentNode = this;
        }
      }
    });
  });

}).call(this);
