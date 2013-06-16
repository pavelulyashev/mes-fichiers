angular.module('mesFichiers')
.controller('NewAlbumController', [
    '$scope', '$rootScope', '$location', 'MonAlbum', 'appConfig',
    function($scope, $rootScope, $location, MonAlbum, appConfig) {
        $rootScope.activeAlbum = 'new';
        $scope.album = {
            files_count: 0
        };

        $scope.saveAlbum = function() {
            if (this.albumForm.$valid) {
                new MonAlbum($scope.album).$create(onAlbumCreated);
            }
        };

        function onAlbumCreated(newAlbum) {
            newAlbum = angular.extend($scope.album, newAlbum);
            $rootScope.albums[newAlbum.id] = newAlbum;
            $location.url(appConfig.defaults.baseUrl + 'album/' + newAlbum.id);
        }
    }
]);
