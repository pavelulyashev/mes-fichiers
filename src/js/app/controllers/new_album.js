angular.module('mesFichiers')
.controller('NewAlbumController', [
    '$scope', '$rootScope', '$location', 'MonAlbum',
    function($scope, $rootScope, $location, MonAlbum) {
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
            $location.url('/mes_fichiers/album/' + newAlbum.id);
        }
    }
]);
