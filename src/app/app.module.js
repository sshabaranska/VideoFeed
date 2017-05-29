angular
    .module('app', [
        //inject here angular modules
        'ui.router',
        'ngSanitize',
        'ngMaterial',

        'shared',
        //inject here your components
        'home',

        'templates'
    ]);