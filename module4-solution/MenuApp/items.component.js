( function () {
    'use strict';

    angular
        .module('data')
        .component('item', {
            templateUrl: 'MenuApp/templates/item.html',
            bindings: {
                itemResults: '<'
            }
        });
})();