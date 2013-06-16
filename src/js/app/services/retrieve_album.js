(function() {
    angular.module('mesFichiers').retrieveAlbum = retrieveAlbum;

    function retrieveAlbum($rootScope, $q, $route, MonAlbum) {
        var albumId = Number($route.current.params.albumId);

        function getFromRootScope() {
            if ($rootScope.albums) {
                var album = $rootScope.albums[albumId];
                if (album && album._fetched) {
                    return album;
                }
            }
        }

        function getPromiseForAlbum() {
            var albumLoaded = $q.defer();
            MonAlbum.get({ id: albumId }, function(album) {
                albumLoaded.resolve(album);
            });
            return albumLoaded.promise;
        }

        return getFromRootScope() || getPromiseForAlbum();
    }
    retrieveAlbum.$inject = ['$rootScope', '$q', '$route', 'MonAlbum'];
})();