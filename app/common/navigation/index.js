'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import NavigationComponent from './navigation.component';

const Navigation = angular
    .module('navigation', [
        uiRouter
    ])
    .component('navigation', NavigationComponent)
    .name;

export default Navigation;