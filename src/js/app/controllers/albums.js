angular.module('mesFichiers')
.controller('AlbumsController', [
    '$rootScope', '$routeParams', 'albums',
    function($rootScope, $routeParams, albums) {
        var conf = $rootScope.conf;
        for (var mode in conf.modes) {
            if (conf.modes.hasOwnProperty(mode) && mode in $routeParams) {
                conf.activeMode = mode;
            }
        }

        $rootScope.activeAlbum = null;
        $rootScope.albums = albums;
    }
]);