'use strict';


module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      clean: {
        command: 'npm run clean'
      },
      build: {
        command: 'npm run dist'
      },
      serve: {
        command: 'npm start'
      },
      forceserve: {
        command: 'killall npm; npm start'
      }
    },


    copy: {
      dist: {
        files: [
          {expand: true, flatten: true, src: ['thumbnail.jpg'], dest: 'dist/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['meta.json'], dest: 'dist/', filter: 'isFile'},
        ]
      }
    },

    'gh-pages': {
      options: {
        base: 'dist',
        branch: 'gh-pages',
      },
      src: '**/*'
    },

    rsync: {
      options: {
        args: ['--verbose'],
        exclude: ['.git*','*.scss','node_modules'],
        recursive: true
      },
      showcase: {
        options: {
          src: './dist/',
          dest: '/home/vagrant/web/ecocompass',
          host: 'showcase',
          delete: true // Careful this option could cause data loss, read the docs!
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('serve',  ['shell:serve']);
  grunt.registerTask('serve:force',  ['shell:forceserve']);
  grunt.registerTask('build',  ['shell:clean', 'shell:build','copy:dist']);
  grunt.registerTask('deploy:staging', ['rsync']);
  grunt.registerTask('deploy:prod', ['gh-pages']);
};
