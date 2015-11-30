'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the appApp
 */
angular.module('chatApp')
  .controller('HomeCtrl', function ($scope, $state, $rootScope) {
        $rootScope.$state = $state;
  });
