(function() {
'use strict';
var App = angular.module('mesFichiers', ['ngResource', 'blueimp.fileupload']);

App.provider('appConfig', [
    function() {
        var defaults = {
            baseUrl:  '/mes_fichiers/',
            rest: {
                albumsUrl: '/mes_fichiers/rest/albums/',
                filesUrl: '/mes_fichiers/rest/files/'
            },
            httpPatch: 'PUT'
        };
        this.defaults = App.appConfig =
            angular.extend(defaults, App.appConfig || {});

        this.$get = function() {
            return {
                defaults: App.appConfig
            };
        };
    }
]);

App.factory('MonAlbum', [
    '$resource', 'appConfig',
    function ($resource, appConfig) {
        return $resource(appConfig.defaults.rest.albumsUrl + ':id', {
            id: '@id' //this binds the ID of the model to the URL param
        }, {
            query: { method: 'GET', isArray: true },
            save: { method: appConfig.defaults.httpPatch },
            create: { method: 'POST' },
            destroy: { method: 'DELETE' }
        });
    }
]);

App.factory('MonFichier', [
    '$resource', 'appConfig',
    function ($resource, appConfig) {
        return $resource(appConfig.defaults.rest.filesUrl + ':id', {
            id: '@id' //this binds the ID of the model to the URL param
        }, {
            query: { method: 'GET', isArray: true },
            save: { method: appConfig.defaults.httpPatch },
            create: { method: 'POST' },
            destroy: { method: 'DELETE' }
        });
    }
]);

App.config([
    '$httpProvider', 'appConfigProvider',
    function($httpProvider, appConfig) {
        var csrf = appConfig.defaults.csrf;

        if (csrf) {
            var csrfHeader = {};
            csrfHeader[csrf.header] = csrf.token;
            angular.extend($httpProvider.defaults.headers.common, csrfHeader);
            // jQuery-fileupload uses jQuery.ajax
            jQuery.ajaxSetup(csrfHeader);
        }
    }
]);

App.config([
    '$httpProvider', 'fileUploadProvider',
    function ($httpProvider, fileUploadProvider) {
        angular.extend(fileUploadProvider.defaults, {
            disableImageResize: true,
            previewMaxWidth: 158,
            previewMaxHeight: 140,
            previewCrop: true,
            maxFileSize: 5000000,
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
            autoUpload: true
        });
    }
]);

App.config([
    '$routeProvider', '$locationProvider', 'appConfigProvider',
    function($routeProvider, $locationProvider, appConfigProvider) {
        var baseUrl = appConfigProvider.defaults.baseUrl;

        $routeProvider.when(baseUrl, {
            templateUrl: 'albums.html',
            controller: 'AlbumsController',
            resolve: { albums: 'retrieveAlbums' }
        });

        $routeProvider.when(baseUrl + 'album/', {
            templateUrl: 'album.html',
            controller: 'NewAlbumController',
            resolve: { albums: 'retrieveAlbums' }
        });

        $routeProvider.when(baseUrl + 'album/:albumId', {
            templateUrl: 'album.html',
            controller: 'AlbumController',
            resolve: { albums: 'retrieveAlbums',
                       album: App.retrieveAlbum }
        });

        $routeProvider.otherwise({
            redirectTo: baseUrl
        });

        $locationProvider.html5Mode(true);
    }
]);
})();