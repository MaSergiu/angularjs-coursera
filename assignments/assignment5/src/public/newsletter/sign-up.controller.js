(function () {
    'use strict';

    angular.module('public')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['menuCategories'];
    function signUpController (menuCategories) {
        var controller = this;

        controller.nameMinLength = 4;

        controller.user = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favouriteDish: ''
        };

        controller.menuCategories = menuCategories;

        controller.submit = function () {
            console.log(controller.user);
            alert('SUBMITTED');
        }


    }
})();