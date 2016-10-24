(function () {
    'use strict';

    angular.module('public')
        .controller('signUpController', signUpController);

    signUpController.$inject = ['menuItems', 'MenuService'];
    function signUpController (menuItems, MenuService) {
        var controller = this;

        controller.nameMinLength = 4;

        controller.user = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            favouriteDish: ''
        };

        controller.menuItems = menuItems.menu_items;

        controller.submit = function () {
            MenuService.saveUserInfo(controller.user).then(function (response) {
                controller.submitInfo = response.message;
            });
        }


    }
})();