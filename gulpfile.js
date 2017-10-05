const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const deporder = require('gulp-deporder');
const htmlclean = require('gulp-htmlclean');
const newer = require('gulp-newer');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const open = require('open');

const config = require('./api/config/constants');

// depends on the sever front-end part
const folder = {
    src: './public/',
    dest: './dist/',
};

// DEV MODE
// main entry point for development
// build is needed if there is no initial dist folder
// gulp.task('dev', ['build', 'dev:page', 'dev:server', 'dev:watch']);
gulp.task('dev', ['dev:page', 'dev:server', 'dev:watch']);

gulp.task('dev:page', () => {
    // depends on server, that statically hosts front-end(public folder)
    return open(`http://localhost:${config.constants.serverPort}`);
});

// start server for dev
gulp.task('dev:server', () => {
    nodemon({
        script: 'server.js',
        ext: 'html js css scss hbs',
        env: { 'NODE_ENV': 'development' },
    });
});

// start watching for changes
gulp.task('dev:watch', () => {
    // html changes
    gulp.watch(folder.src + '*.html', ['dev:html']);

    // sass changes
    gulp.watch(folder.src + 'styles/sass/**/*', ['dev:sass']);

    // javascript changes
    gulp.watch(folder.src + 'scripts/**/*', ['dev:js']);
});

gulp.task('dev:build', ['dev:html', 'dev:sass', 'dev:js']);

gulp.task('dev:html', () => {
    return gulp.src(folder.src + '*.html')
        .pipe(newer(folder.src)) // checks if src files are newer than in dest folder
        .pipe(gulp.dest(folder.src));
});

gulp.task('dev:sass', () => {
    return gulp.src(folder.src + 'styles/sass/**/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(folder.src + 'styles/css/'));
});

gulp.task('dev:js', () => {
    return gulp.src(folder.src + 'scripts/**/*.js')
        .pipe(newer(folder.src + 'scripts/'))
        .pipe(gulp.dest(folder.src + 'scripts/'));
});


// BUILD MODE
gulp.task('build:all', ['build:html', 'build:css', 'build:js', 'copy:assets']);

gulp.task('copy:assets', ['copy:fonts', 'copy:images']);

gulp.task('copy:fonts', () => {
    return gulp.src(folder.src + 'assets/fonts/**/*')
        .pipe(gulp.dest(folder.dest + 'assets/fonts/'));
});

gulp.task('copy:images', () => {
    return gulp.src(folder.src + 'assets/images/**/*')
        .pipe(gulp.dest(folder.dest + 'assets/images/'));
});

gulp.task('build:html', () => {
    return gulp.src(folder.src + '*.html')
        .pipe(newer(folder.dest))
        .pipe(htmlclean())
        .pipe(gulp.dest(folder.dest));
});

gulp.task('build:css', () => {
    return gulp.src(folder.src + 'styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(folder.dest + 'styles/css/'));
});

gulp.task('build:js', () => {
    return gulp.src(folder.src + 'scripts/**/*.js')
        .pipe(newer(folder.dest + 'scripts/'))
        .pipe(babel({
            presets: ['env'],
        }))
        .pipe(deporder()) // reads dependencies on js files
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(folder.dest + 'scripts/'));
});
