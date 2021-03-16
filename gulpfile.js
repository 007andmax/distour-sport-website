const { src, dest } = require('gulp');
var replace = require('gulp-replace')

exports.default = function (cb) {
    src(['dist/csgo-distour-web-site/index.html'])
        .pipe(replace('type="module"', 'type="text/javascript"'))
        .pipe(replace('nomodule', 'type="text/javascript"'))
        .pipe(dest('dist/csgo-distour-web-site/'));
    cb();
};