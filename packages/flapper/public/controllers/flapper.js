'use strict';

/* jshint -W098 */
angular.module('mean.flapper').controller('FlapperController', ['$scope', 'Global', 'Flapper',
  function($scope, Global, Flapper) {
    $scope.global = Global;
    $scope.package = {
      name: 'flapper'
    };
  }
]);
