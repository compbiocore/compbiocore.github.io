
var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;


// Run node to get data and save them into data folder
gulp.task('data', () => {
  exec('npm run getdata')
});

// Compile `*.sass`
gulp.task('sass', () => {
  gulp.src('src/styles/main.sass')
    .pipe(sass({
      outputStyle : 'compressed'
    }))
    .pipe(gulp.dest('static/styles/css'));
});

// Watch asset folder for changes
gulp.task('watch', ['sass'], () => {
  gulp.watch('src/styles/*', ['sass']);
});

// Start Hugo Server
gulp.task('hugo-server', () => {
  exec('hugo server -D')
});

// Set default task to `watch`
gulp.task('default', ['watch', 'hugo-server']);
