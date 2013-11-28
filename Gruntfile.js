"use strict";

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    var appConfig = {

        // Definindo os diretórios
        dirs: {
            js:   "assets/js",
            sass: "assets/sass",
            css:  "assets/css",
            img:  "assets/images"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner:
        "\n" +
        "/*\n" +
         " * -------------------------------------------------------\n" +
         " * Project: <%= pkg.title %>\n" +
         " * Version: <%= pkg.version %>\n" +
         " *\n" +
         " * Autor:  <%= pkg.author.name %>\n" +
         " * Site:     <%= pkg.author.url %>\n" +
         " * Contact: <%= pkg.author.email %>\n" +
         " *\n" +
         " *\n" +
         " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>\n" +
         " * -------------------------------------------------------\n" +
         " */\n" +
         "\n",

        copy: {
          dist: {
            files: {
              '_site_git/' : '_site/**'
            }
          },
          css : {
            src: 'assets/css/style.css',
            dest: '_site/assets/css/style.css'
          }
        },

        // Observação de mudanças nos arquivos
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ["<%= dirs.sass %>/{,*/}*.{scss,sass}"],
                tasks: ["compass", "notify:compass","cssCopy"]
            },
            js: {
                files: ["<%= jshint.all %>"],
                tasks: ["jshint", "uglify", "notify:js"]
            },
            jekyllSources: {
              files: ['*.html','_layouts/*.html','_includes/*.html', '*.yml', 'assets/js/**.js', '_posts/**', 'projects/**', 'blog/**', 'about/**', '_includes/**', 'atom.xml', '**/*.md'],
              tasks: ['shell:jekyll','cssCopy']
            }
        },


        shell: {
            jekyll: {
                command: 'rm -rf _site/*; jekyll build',
                stdout: true
            }
        },

        // Validação de arquivos
        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [
                "Gruntfile.js",
                "<%= dirs.js %>/main.js"
            ]
        },

        // Minificação e concatenação de arquivos
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
                files: {
                    "<%= dirs.js %>/main.min.js": [
                    "<%= dirs.js %>/main.js"
                    ]
                }
            }
        },

        // Compilacão de arquivos Sass/Scss para CSS
        compass: {
            dist: {
                options: {
                    force: true,
                    config: "config.rb",
                    sassDir: "<%= dirs.sass %>",
                    cssDir: "<%= dirs.css %>",
                    banner: "<%= banner %>",
                    specify: "<%= dirs.sass %>/*.scss"
                }
            }
        },

        // Otimização de imagens
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: "<%= dirs.img %>/",
                    src: "<%= dirs.img %>/**",
                    dest: "<%= dirs.img %>/"
                }]
            }
        },

        // Notificações
        notify: {
          compass: {
            options: {
              title: "SASS - <%= pkg.title %>",
              message: "Compilado e minificado com sucesso!"
            }
          },
          js: {
            options: {
              title: "Javascript - <%= pkg.title %>",
              message: "Minificado e validado com sucesso!"
            }
          },
          image: {
            options: {
              title: "<%= pkg.title %>",
              message: "Imagens otimizadas com sucesso!"
            }
          }
        },

        connect: {
          server: {
            options: {
              base: '_site/',
              port: 9009
            }
          }
        },

        open: {
          server: {
            path: 'http://localhost:<%= connect.server.options.port %>/'
          }
        }

    };


    // Iniciando as configurações do Grunt
    grunt.initConfig(appConfig);


    // Registrando as tarefas
    // --------------------------

    // Tarefa padrão
    grunt.registerTask( "default", [ "jshint", "compass", "uglify" ] );

    // Observar mudanças dos arquivos
    grunt.registerTask('server', [
      'connect:server',
      'open:server',
      'watch'
    ]);

    // CSS Copy
    grunt.registerTask('cssCopy', ['copy:css']);

    // Optimizar imagens
    grunt.registerTask( "optimize", [ "imagemin", "notify:image" ] );


};