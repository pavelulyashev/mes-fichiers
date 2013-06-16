angular.module('mesFichiers')
.directive('ngMonFichier', function() {
    return {
        controller: 'FileController',
        templateUrl: 'file.html',
        scope: false
    };
});