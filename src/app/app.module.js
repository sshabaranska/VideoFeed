angular
    .module('app', [
        //inject here angular modules
        'ui.router',
        //'ngMessages',
        'ngSanitize',
        //'ui.bootstrap',
        'ngMaterial',

        'shared',

        //inject here your components
        'home',

        'templates'
    ]);