'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Common from './common';
import Components from './components';


// Root module; webpack entry point

const root = angular
    .module('app', [
        uiRouter,
        Common,
        Components
    ])
    .component('app', AppComponent)
    .config(appConfig);

export default root;


// Configuration

appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function appConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('app', {
            component: 'app',
            url: '/'
        });
}