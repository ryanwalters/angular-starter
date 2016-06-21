'use strict';

import angular from 'angular';
import Navigation from './navigation';

const Common = angular
    .module('app.common', [
        Navigation
    ])
    .name;

export default Common;