(function () {
    'use strict';

    angular.module('public')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['UserService'];
    function signUpController (UserService) {
        var controller = this;

        controller.nameMinLength = 4;

        controller.user = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favouriteDish: ''
        };

        controller.submit = function () {
            UserService.saveUserInfo(controller.user).then(function (response) {
                controller.submitInfo = response.message;
            });
        }


    }
})();