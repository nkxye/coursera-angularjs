(function() {
    "use strict";

    angular
        .module('public')
        .controller('NewsletterController', NewsletterController);

    NewsletterController.$inject = ['NewsletterService'];
    function NewsletterController(NewsletterService) {
        var user = this;

        user.submit = function () {
            user.invalidDish = null;
            var promise = NewsletterService.getMenuItem(user.favDish);
            promise.then(function(result){
                var newsletterForm = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailAddress: user.emailAddress,
                    phone: user.phone,
                    dish: user.favDish
                };
                NewsletterService.saveItem(newsletterForm);
                user.invalidDish = false;
                user.registered = true;
            }, function(error) {
                if(error.status == 500){
                    user.registered = false;
                    user.invalidDish = true;
                }
            });
        };

        user.disableSignUp = NewsletterService.hasSignedUp;
    }
})();
    