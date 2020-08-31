( function () {
    'use strict';

    angular
        .module('data')
        .service('MenuDataService', MenuDataService)
        .constant('APIBASEPATH', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'APIBASEPATH'];
    function MenuDataService($http, APIBASEPATH) {
        this.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (APIBASEPATH + "/categories.json")
            });
        }

        this.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (APIBASEPATH + "/menu_items.json"),
                params: {
                  category: categoryShortName
                }
            });
        }
    }

})();