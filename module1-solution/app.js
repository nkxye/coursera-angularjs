(function () {
    'use strict';

    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    angular.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.blankDishInput = 0;
        $scope.dishesCount = 0;

        $scope.checkDishes = function () {
            if (typeof $scope.dishes == 'undefined' || $scope.dishes.length === 0) {
                $scope.blankDishInput = 1;
                $scope.dishesCountMessage = "Please enter data first.";
            } // checks if undefined or only has whitespaces
            else {
                $scope.blankDishInput = 0;
                let dishArr = $scope.dishes.split(',').map(function(dish) {
                    return dish.trim();
                }); // splits input into single word entries + eliminates whitespaces
                dishArr = dishArr.filter(function (e) {return e}); // removes empty values from the array
                $scope.dishesCount = dishArr.length;

                if ($scope.dishesCount === 0) {
                    $scope.blankDishInput = 1;
                    $scope.dishesCountMessage = "Please enter data first.";
                }
                else if ($scope.dishesCount > 0 && $scope.dishesCount < 4 ) {
                    $scope.dishesCountMessage = "Enjoy!";
                }
                else {
                    $scope.dishesCountMessage = "Too much!";
                }
            }
        };
    }
})();