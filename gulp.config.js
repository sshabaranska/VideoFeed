module.exports = function() {
    return {
        sources: {
            index: 'client/index.html',
            scripts: 'client/app/**/!(*.spec)*.js',
            test: 'client/app/**/*.spec.js',
            stylesheets: [
                'node_modules/angular-material/angular-material.css',
                'client/app/app.css',
                'client/app/**/*.css'
            ],
            templates: 'client/app/**/*.html',
            vendors: [
                'node_modules/angular/angular.js',
                'node_modules/angular-sanitize/angular-sanitize.js',
                'node_modules/angular-aria/angular-aria.js',
                'node_modules/angular-animate/angular-animate.js',
                'node_modules/angular-material/angular-material.js',
                'node_modules/angular-ui-router/release/angular-ui-router.js',
                'node_modules/angular-mocks/angular-mocks.js'
            ]
        },
        dev: {
            index: 'dev',
            scripts: 'dev/app',
            less: 'dev/less',
            stylesheets: 'dev/stylesheets',
            templates: 'dev/app',
            vendors: 'dev/vendor',
            test: 'dev/test'

        },
        release: {
            index: 'release',
            scripts: 'release/js',
            stylesheets: 'release/css',
            templates: 'release/layout',
            vendors: 'release/vendor'
        }
    };
};