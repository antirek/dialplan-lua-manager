gulp = require 'gulp'
coffee = require 'gulp-coffee'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'

gulp.task 'default', ->
  gulp.src ['client/**/*.coffee']
  .pipe coffee bare: true
  .pipe concat 'manager.min.js'
  .pipe uglify()
  .pipe gulp.dest './public/js/'
