angular.module("mesFichiers").run(["$templateCache", function($templateCache) {

  $templateCache.put("album.html",
    "<div class=\"row\"><form class=\"instance-form album-form span5 clearfix\" name=\"albumForm\" ng-submit=\"saveAlbum()\"><fieldset class=\"cover pull-left\"><div class=\"image\"><img ng-show=\"album.cover\" ng-src=\"{{ album.cover.thumbnail_small }}\" alt=\"{{ album.name }}\"><img ng-hide=\"album.cover\" alt=\"\"></div></fieldset><fieldset class=\"text\"><div class=\"controls\"><input type=\"text\" ng-model=\"album.name\" placeholder=\"Album name\" required=\"\"></div><div class=\"controls\"><textarea ng-model=\"album.description\" placeholder=\"Album description\"></textarea>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"controls clearfix\" ng-show=\"album.id\"><a href=\"\" ng-click=\"removeAlbum()\" class=\"btn btn-link pull-left\">Remove album</a> <button ng-show=\"albumForm.$dirty\" type=\"submit\" class=\"btn btn-link pull-right\">Save</button></div><div class=\"controls clearfix\" ng-hide=\"album.id\"><button type=\"submit\" class=\"btn btn-link pull-right\">Create album</button></div></fieldset></form><form enctype=\"multipart/form-data\" action=\"/mes_fichiers/rest/files/\" method=\"post\" ng-show=\"album.id\" class=\"drop-files-area span4\" data-fileupload=\"options\"><input type=\"file\" name=\"file\" multiple=\"multiple\"><input type=\"hidden\" name=\"album\" value=\"{{ album.id }}\"><div class=\"hint\"><div><i class=\"icon-folder-open\"></i>Click to add files</div><div><i class=\"icon-move\"></i>Or drag and drop new files here</div></div></form></div><ul class=\"images\"><li ng-repeat=\"file in album.files\" class=\"image-item\" ng-mon-fichier=\"\" ng-hide=\"file.$deleted\" ng-class=\"editing && 'editing clearfix'\"></li></ul>"
  );

  $templateCache.put("albums.html",
    "<ul class=\"albums row\"><li class=\"album span3\" ng-repeat=\"album in albums\"><div ng-init=\"editing = false\"><a href=\"\" class=\"album-thumbnail\" ng-href=\"/mes_fichiers/album/{{ album.id }}\"><div class=\"album-title pull-left\" title=\"{{ album.name }}\">{{ album.name }}</div><div class=\"pull-right label\">{{ album.files_count }}</div><img ng-src=\"{{ album.cover.thumbnail_medium }}\"></a></div></li></ul>"
  );

  $templateCache.put("file.html",
    "<a href=\"\" class=\"image pull-left\" ng-click=\"file.id && (editing = !editing)\" title=\"Toggle edit form\"><img ng-show=\"file.thumbnail\" ng-src=\"{{ file.thumbnail }}\" alt=\"{{ file.name_ }}\"><div ng-hide=\"file.thumbnail\" data-preview=\"file\"></div><div ng-hide=\"file.id\" class=\"progress progress-warning progress-striped active\" data-ng-class=\"{pending: 'in'}[file.$state()]\" data-progress=\"file.$progress()\"><div class=\"bar\" ng-style=\"{width: num + '%'}\"></div></div></a><div ng-show=\"editing\"><form class=\"instance-form file-form clearfix\" method=\"post\" ng-submit=\"saveFile()\" name=\"fileForm\"><fieldset class=\"text\"><div class=\"controls\"><input type=\"text\" ng-model=\"file.name_\" placeholder=\"Name\"></div><div class=\"controls\"><textarea ng-model=\"file.description\" placeholder=\"Description\"></textarea>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"controls clearfix\"><a href=\"\" class=\"btn btn-link pull-left\" ng-click=\"removeFile()\">Remove File</a> <button ng-show=\"fileForm.$dirty\" type=\"submit\" class=\"btn btn-link pull-right\">Save</button></div></fieldset></form><fieldset class=\"meta\"><a class=\"full-image-link\" ng-href=\"{{ file.url }}\" target=\"_blank\">Open full image</a><div class=\"controls radio\"><label><input type=\"radio\" ng-change=\"$parent.setCover()\" ng-model=\"$parent.album.cover.id\" value=\"{{ file.id }}\">Set as album cover</label></div><ul class=\"info\"><li class=\"size\">Size: {{ file.size | formatFileSize }}</li><li class=\"uploaded\">Uploaded: {{ file.created_at | date }}</li></ul></fieldset></div>"
  );

  $templateCache.put("nav.html",
    "<ul class=\"nav nav-tabs nav-stacked\"><li ng-class=\"{active: !activeAlbum}\"><a ng-href=\"/mes_fichiers/\">All Albums</a></li><li ng-repeat=\"album in albums\" ng-class=\"{active: activeAlbum == album.id}\"><a ng-href=\"/mes_fichiers/album/{{ album.id }}\" class=\"clearfix\">{{ album.name }} <span class=\"pull-right label\">{{ album.files_count }}</span></a></li><li ng-class=\"{active: activeAlbum == 'new'}\"><a ng-href=\"/mes_fichiers/album/\">Create New Album</a></li></ul>"
  );

}]);
