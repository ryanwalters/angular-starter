'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

const Common = angular
    .module('app.common', [
        uiRouter
    ])
    .name;

export default Common;