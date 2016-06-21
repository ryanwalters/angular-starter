'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';


// Configuration

const config = ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            component: 'app',
            url: '/'
        });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];


// Root module and webpack entry point

const root = angular
    .module('app', [
        uiRouter
    ])
    .component('app', AppComponent)
    .config(config);

export default root;