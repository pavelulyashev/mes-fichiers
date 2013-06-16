angular.module('mesFichiers')
.controller('AlbumController', [
    '$scope', '$rootScope', '$location', 'MonAlbum', 'albums', 'album',
    function($scope, $rootScope, $location, MonAlbum, albums, album) {
        album = $scope.album = angular.extend(albums[album.id], album);
        album._fetched = true;
        $scope.queue = album.files;
        $rootScope.activeAlbum = album.id;

        $scope.saveAlbum = function() {
            if ($scope.albumForm.$valid) {
                new MonAlbum({
                    id: album.id,
                    name: album.name,
                    description: album.description
                }).$save(function() {
                    $scope.albumForm.$setPristine();
                });
            }
        };

        $scope.removeAlbum = function() {
            if (confirm('Are you sure you want to remove this album?')) {
                new MonAlbum({id: album.id}).$destroy(function() {
                    delete albums[album.id];
                    $location.url('/mes_fichiers/');
                });
            }
        };

        $scope.setCover = function() {
            new MonAlbum({
                id: album.id,
                cover: album.cover && album.cover.id
            }).$save(updateAlbum);
        };

        $scope.$on('fileuploaddone', function(e, data) {
            var file = data.result;
            var queuedFile = data.files[0];
            angular.extend(queuedFile, data.result);
            ++album.files_count;
        });

        function updateAlbum(updatedAlbum) {
            angular.extend(album, updatedAlbum);
        }
    }
]);