;(function() {
    'use strict';

    angular
        .module('app')
        .constant('VIDEO_TYPES', [
            {
                value: 'All',
                id: 'all'
            },
            {
                value: 'Facebook',
                id: 'facebook'
            },
            {
                value: 'Youtube',
                id: 'youtube'
            },
            {
                value: 'Url',
                id: 'url'
            }
        ])
        .constant('FB_URL', 'https://www.facebook.com/video/embed?video_id=')
        .constant('YOUTUBE_URL', 'https://www.youtube.com/embed/')
})();