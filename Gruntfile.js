/*
This is our Grunt Wrapper, this tells node we are using grunt! 
 */

module.exports = function (grunt) { 
	/*
	Load our Grunt Tasks
	 */
	grunt.loadNpmTasks('grunt-sass');

	/*
	Configure our tasks
	 */
	grunt.initConfig({
		sass: {
			dist: {
				src: 'src/sass/style.scss',
				dest: 'dist/css/style.css'
			}
		}
	});

	/*
	Register our tasks 
	 */
	
	grunt.registerTask('default', [
		'sass'
	]);
};