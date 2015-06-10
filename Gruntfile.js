/*
This is our Grunt Wrapper, this tells node we are using grunt! 
 */

module.exports = function (grunt) { 
	/*
	Load our Grunt Tasks
	 */
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');

	/*
	Configure our tasks
	 */
	grunt.initConfig({
		sass: {
			dist: {
				src: 'src/sass/style.scss',
				dest: 'dist/css/style.css'
			}
		},
		concat: {
			dist: {
				src: 'src/js/*.js',
				dest: 'dist/js/scripts.js'
			}
		}
	});

	/*
	Register our tasks 
	 */
	
	grunt.registerTask('default', [
		'sass',
		'concat'
	]);
};