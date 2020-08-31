( function () {
    'use strict';

    angular
        .module('data')
        .controller('MenuController', MenuController);

    MenuController.$inject = ['categoryResults'];
    function MenuController(categoryResults) {
        this.categoryList = categoryResults;
        console.log(this.categoryList);
    }
})();