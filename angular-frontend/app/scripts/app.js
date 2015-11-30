'use strict';

angular
  .module('chatApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'btford.socket-io',
    'ui.router'
  ])
  .value('nickName', 'anonymous')
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: "",
                templateUrl: "views/home.html",
                controller: 'HomeCtrl'
            })
            .state('start', {
                url: "/start",
                templateUrl: "views/start.html",
                controller: 'StartCtrl'
            })
    });
