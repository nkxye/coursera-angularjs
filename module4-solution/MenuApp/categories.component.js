( function () {
    'use strict';

    angular
        .module('data')
        .component('category', {
            templateUrl: 'MenuApp/templates/category.html',
            bindings: {
                categoryResults: '<'
            }
        });
})();