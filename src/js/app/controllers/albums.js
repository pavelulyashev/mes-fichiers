angular.module('mesFichiers')
.controller('AlbumsController', [
    '$rootScope', 'albums',
    function($rootScope, albums) {
        $rootScope.activeAlbum = null;
        $rootScope.albums = albums;
    }
]);