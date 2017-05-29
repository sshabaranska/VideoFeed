;(function() {
    'use strict';

    angular
        .module('home')
        .controller('HomeController', HomeController);

    /* ngInject */
    function HomeController($scope, homeService) {
        /** @public {Array<Object>} */
        $scope.viewVideoList = [];

        $scope._init = _init;
        $scope._createVideoObject = _createVideoObject;
        $scope.filter = filter;

        function _init() {
            homeService.getVideos()
                .then(function(res) {
                    res.data.items.forEach(function(item) {
                        var viewVideo = $scope._createVideoObject(item);
                        $scope.viewVideoList.push(viewVideo)
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
                    obj.viewUrl = 'https://www.youtube.com/embed/' + item.videoId;
                    break;
                case 'facebook':
                    obj.viewUrl = 'https://www.facebook.com/video/embed?video_id=' + item.videoId;
                    break;
                default:
                    obj.viewUrl = item.url;
            };
            return obj;
        }

        function filter () {

        }

        $scope._init();
    }
})();