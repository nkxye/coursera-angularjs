( function () {
    'use strict';

    angular
        .module('public')
        .service('NewsletterService', NewsletterService)
        .constant('APIBASEPATH', "https://nkxye-angularjs-module5.herokuapp.com");

    NewsletterService.$inject = ['$http', 'APIBASEPATH'];
    function NewsletterService($http, APIBASEPATH) {
        var userNewsletter = this;
        userNewsletter.hasSignedUp = false;
        userNewsletter.userDetails = {};

        userNewsletter.saveItem = function (formObj) {
            var dishNumber = formObj.dish;
            userNewsletter.userDetails = formObj;
            var promise = userNewsletter.getMenuItem(dishNumber);
            promise.then(function (result) {
                userNewsletter.userDetails.dish = result.data;
            });
            userNewsletter.hasSignedUp = true;
        };
        
        userNewsletter.getMenuItem = function (itemShortName) {
            return $http({
                method: "GET",
                url: (APIBASEPATH + "/menu_items/" + itemShortName.toUpperCase() + ".json")
            });
        };
    }
})();