/*! UberCMS 2017-06-28 */
angular.module("cms.images",["ngRoute","cms.shared"]).constant("_",window._).constant("images.modulePath","/Admin/Modules/Images/Js/"),angular.module("cms.images").config(["$routeProvider","shared.routingUtilities","images.modulePath",function(a,b,c){b.registerCrudRoutes(a,c,"Image")}]),angular.module("cms.images").factory("images.imageService",["$http","$upload","shared.imageService",function(a,b,c){var d=_.extend({},c);return d.remove=function(b){return a["delete"](d.getIdRoute(b))},d}]),angular.module("cms.images").controller("AddImageController",["$location","_","shared.focusService","shared.stringUtilities","shared.LoadState","images.imageService",function(a,b,c,d,e,f){function g(){j(),m.save=h,m.cancel=k,m.onFileChanged=i,m.editMode=!1,m.saveLoadState=new e}function h(){m.saveLoadState.on(),f.add(m.command).progress(m.saveLoadState.setProgress).then(l)}function i(){var a=m.command;a.file&&a.file.name&&(a.title=d.capitaliseFirstLetter(d.getFileNameWithoutExtension(a.file.name)),c.focusById("title"))}function j(){m.command={}}function k(){l()}function l(){a.path("")}var m=this;g()}]),angular.module("cms.images").controller("ImageDetailsController",["$routeParams","$q","$location","_","shared.LoadState","shared.modalDialogService","images.imageService","images.modulePath",function(a,b,c,d,e,f,g,h){function i(){t.edit=j,t.save=k,t.cancel=l,t.remove=m,t.editMode=!1,t.globalLoadState=new e,t.saveLoadState=new e,t.formLoadState=new e(!0),o(t.formLoadState)}function j(){t.editMode=!0,t.mainForm.formStatus.clear()}function k(){r(t.saveLoadState),g.update(t.command).then(n.bind(null,"Changes were saved successfully",t.saveLoadState))}function l(){t.editMode=!1,t.previewImage=d.clone(t.image),t.command=p(t.image),t.mainForm.formStatus.clear()}function m(){function a(){return r(),g.remove(t.image.imageAssetId).then(q)["catch"](s)}var b={title:"Delete Image",message:"Are you sure you want to delete this image?",okButtonTitle:"Yes, delete it",onOk:a};f.confirm(b)}function n(a,b){return o(b).then(t.mainForm.formStatus.success.bind(null,a))}function o(b){function c(){return g.getById(a.id).then(function(a){t.image=a,t.previewImage=a,t.command=p(a),t.editMode=!1})}return c().then(s.bind(null,b))}function p(a){return d.pick(a,"imageAssetId","title","tags","defaultAnchorLocation")}function q(){c.path("")}function r(a){t.globalLoadState.on(),a&&d.isFunction(a.on)&&a.on()}function s(a){t.globalLoadState.off(),a&&d.isFunction(a.off)&&a.off()}var t=this;i()}]),angular.module("cms.images").controller("ImageListController",["_","shared.LoadState","shared.SearchQuery","images.imageService",function(a,b,c,d){function e(){i.gridLoadState=new b,i.query=new c({onChanged:g}),i.filter=i.query.getFilters(),i.toggleFilter=f,f(!1),h()}function f(b){i.isFilterVisible=a.isUndefined(b)?!i.isFilterVisible:b}function g(){f(!1),h()}function h(){return i.gridLoadState.on(),d.getAll(i.query.getParameters()).then(function(a){i.result=a,i.gridLoadState.off()})}var i=this;e()}]);