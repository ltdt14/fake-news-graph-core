"use strict";

module.exports = function (grunt) {

    //load plugins
    [
        "grunt-contrib-less",
        "grunt-contrib-uglify",
        "grunt-contrib-cssmin",
        "grunt-contrib-watch",
        "grunt-contrib-clean",
        "grunt-hashres"
    ].forEach(function(task){
        grunt.loadNpmTasks(task);
    });

    //configure plugins
    grunt.initConfig({
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
            scripts: ["public/js/asy_website.min.js"]
        },
        uglify: {
            options: {
                mangle: false
            },
            all: {
                files: {
                    "public/js/asy_website.min.js": ["public/js/**/*.js"]
                }
            }
        },
        cssmin:{
            combine:{
                files:{
                    "public/css/asy_website.css": ["public/css/**/*.css"]
                }
            },
            minify:{
                src: "public/css/asy_website.css",
                dest: "public/css/asy_website.min.css",
            }
        },
        hashres: {
            options:{
                fileNameFormat: "${name}.${hash}.${ext}"
            },
            all:{
                src: [
                    "public/js/app.min.js",
                    "public/css/app.min.css",
                ],
                dest: [
                    "views/layouts/main.handlebars",
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
            },
            scripts: {
                files: ["public/js/**/*.js", "!public/js/asy_website.min.js"],
                tasks: ["clean:scripts", "uglify"],
                options: {
                    livereload: true
                }
            }
        }
    });

    //register tasks
    grunt.registerTask("static-production", ["clean", "less", "cssmin", "uglify", "hashres"]);
    grunt.registerTask('static-development', ['clean'])
};