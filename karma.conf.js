// Karma configuration
// Generated on Sat Nov 08 2014 19:20:47 GMT-0700 (MST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            'dev/vendor/angular.js',
            'dev/vendor/angular-sanitize.js',
            'dev/vendor/angular-aria.js',
            'dev/vendor/angular-animate.js',
            'dev/vendor/angular-material.js',
            'dev/vendor/angular-ui-router.js',
            'dev/vendor/angular-mocks.js',
            'dev/app/app.module.js',
            'dev/app/components/home/home.module.js',
            'dev/app/shared/navigation-bar/navigation-bar.module.js',
            'dev/app/shared/trust-url/trust-url.module.js',
            'dev/app/**/*.js',
            'dev/app/**/*.js',
            'dev/app/templates.js',
            'dev/test/**/*.spec.js'
        ],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
