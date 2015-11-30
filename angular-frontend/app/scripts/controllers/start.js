'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:StartCtrl
 * @description
 * # StartCtrl
 * Controller of the appApp
 */
angular.module('chatApp')
  .controller('StartCtrl', function ($state, $rootScope) {
        $rootScope.$state = $state;
  });
