(function () {
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
   LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.lunchMenu = '';
    $scope.message = '';

    $scope.checkMenu = function() {
          if($scope.lunchMenu ===''){
            $scope.message = 'Please enter data first!';
            return;
          }

          var listOfMeals = $scope.lunchMenu.split(',');

          if(listOfMeals.length <= 3) {
            $scope.message = 'Enjoy!';
          } else {
            $scope.message = 'Too much!';
          }

    };

  };


})();
