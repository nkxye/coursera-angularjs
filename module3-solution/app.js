(function () {
    'use strict';

    angular
        .module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .constant('APIBASEPATH', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'menu-items.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: 'NarrowItDownController as narrowed',
            bindToController: true
        };
        return ddo;
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowed = this;
        narrowed.searchTerm = '';

        narrowed.matchQuery = function() {
            narrowed.found = null;
            if(narrowed.searchTerm.length) {
                var queryPromise = MenuSearchService.getMatchedMenuItems(narrowed.searchTerm);
                queryPromise.then(function (result) {
                    narrowed.found = result;
                    narrowed.nothingFound = ((narrowed.found.length) ? false : true);
                })
                .catch(function (error) {
                    console.log(error);
                })
            }
            else {
                narrowed.nothingFound = true;
            }
        };

        narrowed.removeChoice = function(index) {
            narrowed.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'APIBASEPATH'];
    function MenuSearchService($http, APIBASEPATH) {
        this.getMatchedMenuItems = function(searchTerm) {
            return $http({
                    method: 'GET',
                    url: (APIBASEPATH + '/menu_items.json')
                }).then(function (result) {
                var foundItems = [];
                var menu = result.data;
                for (const item in menu) {
                    for (let i = 0; i < menu[item].length; i++) {
                        if (menu[item][i]['description'].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                            foundItems.push(menu[item][i]);
                        }
                    }
                }
                return foundItems;
            });
        }
    }
})();