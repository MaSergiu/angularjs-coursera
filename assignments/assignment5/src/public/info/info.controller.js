(function () {
    "use strict";

    angular.module('public')
        .controller('infoController', infoController);

    infoController.$inject = ['MenuService'];
    function infoController(MenuService) {
        var controller = this;

        controller.user = MenuService.getSavedUserInfo();
        console.log(controller.user.favouriteDish);
    }

})();
