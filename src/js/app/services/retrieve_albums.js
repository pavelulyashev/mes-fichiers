angular.module('mesFichiers')
.service('retrieveAlbums', [
    '$rootScope', '$q', 'MonAlbum',
    function($rootScope, $q, MonAlbum) {
        var albumsLoaded = $q.defer();

        if ($rootScope.albums) {
            albumsLoaded.resolve($rootScope.albums);
        } else {
            MonAlbum.query(onAlbumsReceived);
        }

        function onAlbumsReceived(albums) {
            var albumsObj = $rootScope.albums = {};
            for (var i = 0, len = albums.length; i < len; i++) {
                var album = albums[i];
                album.files_count = album.files.length;
                albumsObj[album.id] = album;
            }
            albumsLoaded.resolve(albumsObj);
        }

        return albumsLoaded.promise;
    }
]);