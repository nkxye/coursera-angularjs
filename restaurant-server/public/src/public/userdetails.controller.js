(function() {
    "use strict";

    angular
        .module('public')
        .controller('UserDetailsController', UserDetailsController);

    UserDetailsController.$inject = ['userInfo', 'ApiPath'];
    function UserDetailsController(userInfo, ApiPath) {
        var user = this;
        if (Object.keys(userInfo).length === 0) {
            user.empty = true;
        }
        else {
            user.empty = false;
            user.userDetails = userInfo;
            user.apiPath = ApiPath;
        }
    }
})();
    