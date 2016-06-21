'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

const Components = angular
    .module('app.components', [
        uiRouter
    ])
    .name;

export default Components;