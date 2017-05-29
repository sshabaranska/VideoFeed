;(function() {
    'use strict';

    angular
        .module('home')
        .factory('homeService', homeService);

    /* ngInject */
    function homeService($http) {
        return {
            queryVideos: queryVideos
        };

        function queryVideos(type) {
            return $http.get('/videos/' + type);
        };
    }
})();