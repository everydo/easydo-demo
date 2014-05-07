define [
  'underscore'
  'marionette'
  'backbone'
  'app'
  'apps/desks/disk/content_list_view'
  'apps/desks/disk/right_view'
  'apps/desks/disk/file_model'
  'apps/desks/disk/upload_view'
  'apps/desks/disk/file_collection'
], (_, Marionette, Backbone, App, ContentListView, RightView, FileModel, UploadView, FileCollection) ->

  DiskController =

    DiskApp: ->
      unless @files
        @files = new FileCollection()
        @files.fetch reset: true

      contentlistview = new ContentListView collection: @files
      App.pagecontent.show contentlistview
      rightview = new RightView()
      App.pageright.show rightview
      rightview.on 'file:upload', @uploadFile, this
      rightview.on 'file:createFolder', @createFolder, this
      return

    uploadFile: (args) ->
      fileModel = new FileModel collection: @files
      uploadview = new UploadView
        model: fileModel
        action: 'create'

      uploadview.on 'file:save', @saveFile, this
      App.modal.show uploadview
      return

    createFolder: (args) ->
      fileModel = new FileModel collection: @files
      uploadview = new UploadView
        model: fileModel
        action: 'create'

      uploadview.on 'file:save', @saveFile, this
      App.modal.show uploadview
      return

    saveFile: (args) ->
      self = this
      view = args.view
      model = args.model
      title = view.$('input#title').val()
      admin = view.$('input#admin').val()
      tag = view.$('input#tag').val()
      size = view.$('input#size').val()
      update = view.$('input#update').val()
      model.save
        title: title
        admin: admin
        tag: tag
        size: size
        update: update
      ,
        success: (model, response, options) ->
          self.files.add model
          App.modal.hideModal()
          return

        error: (model, xhr, options) ->
          console.log 'User save server ERROR'
          return

      return

  DiskController
