(() => {
    'use strict';

    angular
        .module('app')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                templateUrl: '/app/app.html',
                url: '/'
            });
    }
})();