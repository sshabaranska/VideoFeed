;(function() {
    'use strict';

    angular
        .module('home')
        .factory('homeService', homeService);

    /* ngInject */
    function homeService($http, API_URL) {
        return {
            getVideos: getVideos
        };

        function getVideos() {
            return $http.get(API_URL + '');
        };
    }
})();