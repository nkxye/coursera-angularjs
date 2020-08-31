( function () {
    'use strict';

    angular
        .module('data')
        .controller('MenuItemController', MenuItemController);

    MenuItemController.$inject = ['itemResults'];
    function MenuItemController(itemResults) {
        this.itemList = itemResults;
        console.log(this.itemList);
    }
})();