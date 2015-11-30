'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ChatflowCtrl
 * @description
 * # ChatflowCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ChatflowCtrl', function (LANG, CHAT_FIXTURES_PATH, FIXTURE_EXTENSION) {
        this.loadFixutes = function () {

        };

        this.currentState = 0;
        this.payload = {};
        this.next = function() {

        };

       this.send = function (isSuccess) {
            if (typeof isSuccess === 'undefined') {
                //ASK QUESTION
            } else if (isSuccess) {
                //ACCEPT ANSWER
            } else {
                // DENY ANSWER, WAIT 5 SECS, SHOW TYPING ICON, TRY AGAIN
            }
       };
  });
