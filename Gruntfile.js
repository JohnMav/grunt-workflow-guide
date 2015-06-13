/*
This is our Grunt Wrapper, this tells node we are using grunt! 
 */

module.exports = function (grunt) { 
	/*
	Loading our config
	 */
	var config = grunt.file.readYAML('Gruntconfig.yml');

	/*
	Load our Grunt Tasks
	 */
	 require('load-grunt-tasks')(grunt);

	/*
	Configure our tasks
	 */
	 require('./grunt_tasks/sass.js')(grunt, config);
	 require('./grunt_tasks/javascript.js')(grunt, config);
	/*
	Register our tasks 
	 */
	
	grunt.registerTask('default', [
		'sass',
		'concat',
		'jshint',
		'csslint',
		'watch'
	]);
};