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
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('app', {
                component: 'app',
                url: '/'
            });
    });

export default root;