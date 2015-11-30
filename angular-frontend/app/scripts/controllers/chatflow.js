'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ChatflowCtrl
 * @description
 * # ChatflowCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ChatflowCtrl', function () {
        this.currentState = 0;
        this.payload = {};
        this.next = function() {}
  });
