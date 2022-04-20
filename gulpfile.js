
var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;


// Run node to get data and save them into data folder
gulp.task('data', (cb) => {
  exec('npm run getdata', cb)
});

// Compile `*.sass`
gulp.task('sass', async () => {
  gulp.src('src/styles/main.sass')
    .pipe(sass({
      outputStyle : 'compressed'
    }))
    .pipe(gulp.dest('static/styles/css'));
});

// Watch asset folder for changes
gulp.task('watch', gulp.series('sass', async () => {
  gulp.watch('src/styles/*', gulp.series('sass'));
}));

// Start Hugo Server
gulp.task('hugo-server', (cb) => {
  exec('hugo server -D', cb)
});

// Set default task to `watch`
gulp.task('default', gulp.parallel('watch', 'hugo-server'));
