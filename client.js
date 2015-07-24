angular.module('angularModule', []).
  controller('angularController', function($scope, $interval) {
    $scope.arr = [];

    $scope.randomGenerator = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $scope.fillRandom = function() {
      $scope.arr = [];
      for(var i = 0; i < 20; i++) {
        $scope.arr.push($scope.randomGenerator(0, 10000));
      }
    };

    $scope.autoRefresh = function() {
      $interval(function() {
        $scope.fillRandom();
      }, 500);
    };

    $scope.fillRandom();

  });