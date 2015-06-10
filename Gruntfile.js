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
	grunt.initConfig({
		sass: {
			dist: {
				src: config.scssDir + 'style.scss',
				dest: config.cssDir + 'style.css'
			}
		},
		concat: {
			dist: {
				src: config.jsSrcDir + '*.js',
				dest: config.jsConcatDir + 'scripts.js',
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				config.jsSrcDir + "*.js"
			]
		}
	});

	/*
	Register our tasks 
	 */
	
	grunt.registerTask('default', [
		'sass',
		'concat',
		'jshint'
	]);
};