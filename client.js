angular.module('angularModule', []).
  controller('angularController', function($scope, $interval, $http) {
    $scope.arr = [];
    $scope.isDisabled = false;

    $scope.randomGenerator = function(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    $scope.fillRandom = function() {
      for(var i = 0; i < 20; i++) {
        $scope.arr.push({stuff: $scope.randomGenerator(0, 10000)});
      }
    };

    $scope.autoRefresh = function() {
      $scope.isDisabled = true;
      $interval(function() {
        $scope.fillRandom();
      }, 710);
    };

    $scope.getQuote = function() {
      $http.get('http://api.acme.international/fortune').
        success(function(data) {
          $scope.autoRefresh();
          $scope.arr.push(data.fortune);
        }).
        error(function() {
          console.log("Failure");
        });
    };

    $scope.fillRandom();

  });