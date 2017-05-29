;(function() {
    'use strict';

    angular
        .module('app')
        .constant('API_URL', 'https://cdn.playbuzz.com/content/feed/items')
        .constant('VIDEO_TYPES', [
            {
                value: 'All',
                id: 'null'
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
                value: 'Video',
                id: 'video'
            }
        ])
        .constant('FB_URL', 'https://www.facebook.com/video/embed?video_id=')
        .constant('YOUTUBE_URL', 'https://www.youtube.com/embed/')
})();