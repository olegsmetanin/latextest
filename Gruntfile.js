/*
 * grunt-latex
 * https://github.com/tvooo/grunt-latex
 *
 * Copyright (c) 2013 Tim von Oldenburg
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['dist']
		},
		mkdir: {
			all: {
				options: {
					create: ['dist']
				}
			}
		},
		shell: {
			latex: {
				command: 'pdflatex -output-directory="../../dist/" dissertation.tex',
				options: {
					stdout: true,
					execOptions: {
						cwd: 'src/Dissertation'
					}
				}
			}
		}//,
//		latex: {
//			pdf: {
//				cwd: 'src/Dissertation', // grunt-latex cant cwd
//				src: [
//					'dissertation.tex'//,
//					//'src/**/*.tex'
//				],
//				options: {
//					outputDirectory: 'dist'
//				}
//			}
//		}

	});

	// Actually load this plugin's task(s).
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-mkdir');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'mkdir', 'shell:latex']);

};
