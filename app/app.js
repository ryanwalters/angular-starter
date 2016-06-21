'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Common from './common';
import Components from './components';


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


// Root module; webpack entry point

const root = angular
    .module('app', [
        uiRouter,
        Common,
        Components
    ])
    .component('app', AppComponent)
    .config(config);

export default root;