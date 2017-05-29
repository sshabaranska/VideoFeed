;(function() {
    'use strict';

    angular
        .module('home')
        .controller('HomeController', HomeController);

    /* ngInject */
    function HomeController($scope, homeService, VIDEO_TYPES, FB_URL, YOUTUBE_URL) {
        /** @public {Array<Object>} */
        $scope.viewVideoList = [];
        $scope.videoTypes = VIDEO_TYPES;
        $scope.searchType = $scope.videoTypes[0].id;
        $scope._init = _init;
        $scope._createVideoObject = _createVideoObject;
        $scope.filter = filter;

        function _init() {
            homeService.queryVideos($scope.searchType)
                .then(function(res) {

                    res.data.items.forEach(function(item) {
                        var viewVideo = $scope._createVideoObject(item);
                        $scope.viewVideoList.push(viewVideo);
                    });
                }, function(err) {
                    console.log(err);
                });
        };

        function _createVideoObject (item) {
            var obj = {
                video: item 
            };
            switch(item.source) {
                case 'youtube':
                    obj.viewUrl = FB_URL + item.videoId;
                    break;
                case 'facebook':
                    obj.viewUrl = YOUTUBE_URL + item.videoId;
                    break;
                default:
                    obj.viewUrl = item.url;
            };
            return obj;
        }

        function filter () {
            $scope.viewVideoList = [];
            $scope._init();
        }

        $scope._init();
    }
})();