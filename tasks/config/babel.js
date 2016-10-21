/**
  Use Babel (ES6) with Sails JS
  https://gist.github.com/jodyheavener/27a7258b32a9ef80f2fd

Install Grunt Babel npm install --save grunt-babel
Create a babel.js file under tasks/config and add something like the following:

 Compiles jsx files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 
*/
module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      options: {
        presets: ['react']  
      },
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['**/*.jsx'],
        dest: '.tmp/public/js/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};
