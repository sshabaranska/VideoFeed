;(function() {
    'use strict';

    angular
        .module('home')
        .factory('homeService', homeService);

    /* ngInject */
    function homeService($http, API_URL) {
        return {
            queryVideos: queryVideos
        };

        function queryVideos(id) {
            return $http.get(API_URL);
        };
    }
})();