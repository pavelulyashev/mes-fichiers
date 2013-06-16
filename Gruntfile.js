module.exports = function(grunt) {
  var src = {
    fileupload: [
      'src/js/vendors/fileupload/jquery.ui.widget.min.js',
      'src/js/vendors/fileupload/load-image.min.js',
      'src/js/vendors/fileupload/canvas-to-blob.min.js',
      'src/js/vendors/fileupload/jquery.iframe-transport.js',
      'src/js/vendors/fileupload/jquery.fileupload.js',
      'src/js/vendors/fileupload/jquery.fileupload-process.js',
      'src/js/vendors/fileupload/jquery.fileupload-resize.js',
      'src/js/vendors/fileupload/jquery.fileupload-validate.js',
      'src/js/vendors/fileupload/jquery.fileupload-angular.js'
    ],
    app: [
      'src/js/app/**/*.js'
    ],
    vendors: [
      'src/js/vendors/jquery.min.js',
      'src/js/vendors/angular.min.js',
      'src/js/vendors/angular-resource.min.js'
    ]
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: '\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.all.min.js': src.vendors
            .concat(['build/js/jquery.fileupload.all.min.js'])
            .concat(['build/js/<%= pkg.name %>.js'])
            .concat(['<%= ngtemplates.app.dest %>']),
          'dist/css/<%= pkg.name %>.all.min.css': [
              'src/css/bootstrap.min.css',
              'build/css/<%= pkg.name %>.css'
            ]
        }
      },
      build: {
        files: {
          'build/js/jquery.fileupload.all.js': src.fileupload,
          'build/js/<%= pkg.name %>.js': src.app
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/tinymce-mes-fichiers.min.js': 'src/js/tinymce-mes-fichiers.js',
          'build/js/jquery.fileupload.all.min.js': ['build/js/jquery.fileupload.all.js'],
          'build/js/<%= pkg.name %>.js': ['build/js/<%= pkg.name %>.js'],
          '<%= ngtemplates.app.dest %>': ['<%= ngtemplates.app.dest %>']
        }
      },
      dev: {
        files: {
          'dist/js/tinymce-mes-fichiers.min.js': 'src/js/tinymce-mes-fichiers.js',
          'build/js/jquery.fileupload.all.min.js': ['build/js/jquery.fileupload.all.js']
        }
      }
    },

    less: {
      dev: {
        files: {
          'build/css/<%= pkg.name %>.css': 'src/css/mes-fichiers.less'
        }
      },
      prod: {
        options: {
          yuicompress: true
        },
        files: {
          'build/css/<%= pkg.name %>.css': 'src/css/mes-fichiers.less'
        }
      }
    },

    jshint: {
      files: ['gruntfile.js', 'src/js/app/**/*.js', 'test/**/*.js'],
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
        dest: 'build/js/templates.js'
      }
    },

    copy: {
      img: {
        files: [{
          cwd: 'src/img/',
          src: ['*'],
          dest: 'dist/img/',
          expand: true
        }]
      }
    },

    watch: {
      tasks: ['default']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-ngmin');
//  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-angular-templates');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('templates', ['htmlmin', 'ngtemplates']);
  grunt.registerTask('default', [
    'jshint',
    'less:dev',
    'templates',
    'concat:build',
    'uglify:dev',
    'concat:dist',
    'copy:img'
  ]);
  grunt.registerTask('dist', [
    'jshint',
    'less:prod',
    'templates',
    'concat:build',
    'uglify:dist',
    'concat:dist',
    'copy:img'
  ]);
};