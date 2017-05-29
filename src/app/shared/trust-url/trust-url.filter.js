;(function() {
    'use strict';

    angular
        .module('shared')
        .filter('trustUrl', trustUrl);

    /* ngInject */
    function trustUrl($sce) {
        return function(url) {
            return $sce.trustAsResourceUrl(url);
        }
    };
})();