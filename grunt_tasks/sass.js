/*
This will contain our Sass grunt tasks
 */

module.exports = function (grunt, config) {
  grunt.config.merge({
    sass: {
      dist: {
        src: config.scssDir + 'style.scss',
        dest: config.cssDir + 'style.css'
      }
    },
    csslint: {
      strict: {
        options: {
          important: 2
        },
        src: "<%= sass.dist.dest %>"
      }
    },
    watch: {
      sass: {
		files: config.scssDir + "**/*.scss",
        tasks: [
          "sass",
          "csslint"
        ]
      }
    }
  });
};