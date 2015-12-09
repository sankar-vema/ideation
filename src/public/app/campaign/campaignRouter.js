'use strict';

angular.module('ideation.campaign')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/campaign/list', {
        templateUrl: '/app/campaign/campaign-view-main.html',
        controller: 'campaignControllerMain'
      })

      .when('/campaign/add', {
        templateUrl: '/app/campaign/campaign-add.html',
        controller: 'campaignControllerMain'
      })

      .when('/campaign/:id/show', {
        templateUrl: '/app/campaign/campaign-view3-show.html',
        controller: 'campaignControllerMain'
      })
       .when('/campaign/view', {
        templateUrl: '/app/campaign/campaign-view.html',
        controller: 'campaignControllerMain'
      })

      .when('/campaign/:id/edit', {
        templateUrl: '/app/campaign/campaign-view-add.html',
        controller: 'campaignControllerMain'
      });
    }
  ]);
