'use strict';

angular.module('mean.flapper').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('flapper example page', {
      url: '/flapper/example',
      templateUrl: 'flapper/views/index.html'
    });
  }
]);
