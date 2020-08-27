(function () {
    'use strict';

    angular
        .module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        this.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        }

        this.items = ShoppingListCheckOffService.getItems(0);
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        this.items = ShoppingListCheckOffService.getItems(1);
    }

    function ShoppingListCheckOffService() {
        var toBuyList = [
            {
                name: 'cookies',
                quantity: 10
            },
            {
                name: 'saltines',
                quantity: 8
            },
            {
                name: 'burger buns',
                quantity: 6
            },
            {
                name: 'fresh milk',
                quantity: 4
            },
            {
                name: 'eggs',
                quantity: 2
            }
        ];

        var boughtList = [];

        this.buyItem = function(itemIndex) {
            boughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1);
        };

        this.getItems = function(itemStatus) {
            return ((itemStatus === 1) ? boughtList : toBuyList);
        }
    }
})();