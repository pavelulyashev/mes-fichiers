angular.module('mesFichiers')
.controller('FileController', [
    '$scope', '$window', 'MonFichier',
    function($scope, $window, MonFichier) {
        var album = $scope.$parent.album;
        var file = $scope.file;

        if (file.error) {
            file.$deleted = true;
        }

        // Newly uploaded file is instance of File,
        // File.name is only getter, so the model needs another field
        file.name_ = file.name;

        $scope.saveFile = function() {
            if ($scope.fileForm.$valid) {
                new MonFichier({
                    id: file.id,
                    name: file.name_,
                    description: file.description
                }).$save(function() {
                    $scope.fileForm.$setPristine();
                });
            }
        };

        $scope.removeFile = function() {
            if (confirm('Are you sure you want to remove this file?')) {
                new MonFichier({id: file.id}).$destroy(removeFileFromAlbum);
            }
        };

        $scope.sendToParentWindow = function() {
            var file_ = {
                url: file.url
            };
            $window.parent.postMessage(file_, $window.parent.location.href);
        };

        function removeFileFromAlbum() {
            file.$deleted = true;
            --album.files_count;

            if (album.cover && album.cover.id === file.id) {
                album.cover = null;
                $scope.$parent.setCover();
            }
        }
    }
]);
