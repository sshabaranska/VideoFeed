;(function() {
    'use strict';

    angular
        .module('home')
        .config(config);

    /* ngInject */
    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '^/',
            views: {
                content: {
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController'
                }
            }
        });
    }
})();