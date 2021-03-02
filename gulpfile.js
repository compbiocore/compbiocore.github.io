
var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;


// Run node to get data and save them into data folder
gulp.task('data', () => {
  exec('npm run getdata')
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
gulp.task('watch', gulp.series('sass', () => {
  gulp.watch('src/styles/*', gulp.series('sass'));
}));

// Start Hugo Server
gulp.task('hugo-server', () => {
  exec('hugo server -D')
});

// Set default task to `watch`
gulp.task('default', gulp.series('watch', 'hugo-server'));
