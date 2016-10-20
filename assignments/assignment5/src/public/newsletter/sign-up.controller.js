(function () {
    'use strict';

    angular.module('public')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['menuCategories'];
    function signUpController (menuCategories) {
        var controller = this;

        controller.menuCategories = menuCategories;

        controller.submit = function () {
            alert('SUBMITTED');
        }


    }
})();