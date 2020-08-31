( function () {
    'use strict';

    angular
        .module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'MenuApp/templates/home.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'MenuApp/templates/categories.html',
                controller: 'MenuController as menuCtrl',
                resolve: {
                    categoryResults: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories().then(function (categories) {
                            return categories.data;
                          });
                    }]
                }
            })
            .state('items', {
                url: '/categories/{categoryCode}',
                templateUrl: 'MenuApp/templates/items.html',
                controller: 'MenuItemController as menuItemCtrl',
                resolve: {
                    itemResults: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryCode).then(function (items) {
                            return items.data;
                          });
                    }]
                }
            })
    }
})();