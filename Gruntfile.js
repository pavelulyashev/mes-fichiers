module.exports = function(grunt) {
  var src = {
    fileupload: [
      'src/js/libs/fileupload/jquery.ui.widget.min.js',
      'src/js/libs/fileupload/load-image.min.js',
      'src/js/libs/fileupload/canvas-to-blob.min.js',
      'src/js/libs/fileupload/jquery.iframe-transport.js',
      'src/js/libs/fileupload/jquery.fileupload.js',
      'src/js/libs/fileupload/jquery.fileupload-process.js',
      'src/js/libs/fileupload/jquery.fileupload-resize.js',
      'src/js/libs/fileupload/jquery.fileupload-validate.js'
    ],
    angular: [
      'src/js/libs/angular.min.js',
      'src/js/libs/angular-resource.min.js',
      'src/js/libs/fileupload/jquery.fileupload-angular.js'
    ],
    app: [
      'src/js/mes-fichiers-app.js'
    ],
    all: [
      'src/js/libs/jquery.min.js'
    ]
  };
  src.all = src.all.concat(src.fileupload)
                   .concat(src.angular)
                   .concat(src.app)
                   .concat(['<%= ngtemplates.app.dest %>']);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        src: src.all,
        dest: 'dist/js/<%= pkg.name %>.all.js'
      },
      fileupload: {
        src: src.fileupload,
        dest: 'dist/js/jquery.fileupload.all.js'
      },
      css: {
        src: ['src/css/bootstrap.min.css', 'dist/css/<%= pkg.name %>.css'],
        dest: 'dist/css/<%= pkg.name %>.all.min.css'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.all.min.js': ['<%= concat.dist.dest %>']
        }
      },
      fileupload: {
        files: {
          'dist/js/jquery.fileupload.all.min.js': ['<%= concat.fileupload.dest %>']
        }
      }
    },
    less: {
      dev: {
        files: {
          'dist/css/<%= pkg.name %>.css': 'src/css/mes-fichiers.less'
        }
      },
      prod: {
        options: {
          yuicompress: true
        },
        files: {
          'dist/css/mes-fichiers.css': 'src/css/mes-fichiers.less'
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', 'src/js/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          angular: true,
          console: true,
          module: true,
          document: true,
          confirm: true
        }
      }
    },
    ngmin: {

    },
    jasmine: {

    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'build/views/album.html': 'src/views/album.html',
          'build/views/albums.html': 'src/views/albums.html',
          'build/views/file.html': 'src/views/file.html',
          'build/views/nav.html': 'src/views/nav.html'
        }
      }
    },
    ngtemplates: {
      app: {
        options: {
          base: 'build/views',
          module: 'mesFichiers'
        },
        src: 'build/views/**.html',
        dest: 'dist/js/templates.js'
      }
    }
//    watch: {
//      files: ['<%= jshint.files %>'],
//      tasks: ['jshint']
//    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-ngmin');
//  grunt.loadNpmTasks('grunt-contrib-jasmine');
//  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('templates', ['htmlmin', 'ngtemplates']);
  grunt.registerTask('default', [
    'jshint',
    'less:prod',
    'templates',
    'concat:dist',
    'concat:css',
    'uglify:dist'
  ]);

};