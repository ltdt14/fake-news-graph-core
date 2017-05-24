"use strict";

module.exports = function (grunt) {

    //load plugins
    [
        "grunt-contrib-less",
        "grunt-contrib-cssmin",
        "grunt-contrib-watch",
        "grunt-contrib-clean",
        "grunt-hashres",
        "grunt-babel"
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
        babel: {
            options: {
                presets: ["es2015", "es2016", "react", "stage-1"]
            },
            dist: {
                files: {
                    'dist/server/index.js': 'src/server/index.js'
                }
            }
        },
        less: {
            development: {
                options: {
                    sourceMap: true
                },
                files: {
                    "public/css/stylesheet.css": "src/app/less/stylesheet.less",
                }
            }
        },
        clean: {
            style: ["public/css/**/*.css"],
        },
        cssmin:{
            minify:{
                src: "public/css/stylesheet.css",
                dest: "public/css/stylesheet.min.css",
            }
        },
        hashres: {
            options:{
                fileNameFormat: "${name}.${hash}.${ext}"
            },
            all:{
                src: [
                    "public/css/stylesheet.min.css",
                ],
                dest: [
                    "views/index.hbs",
                ]
            },
        },
        watch: {
            css: {
                files: ["src/app/less/**/*.less"],
                tasks: ["clean:style", "less"],
                options: {
                    livereload: true
                }
            }
        }
    });

    //register tasks
    grunt.registerTask("production", ["clean", "less", "cssmin", "hashres"]);
};