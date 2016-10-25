(function () {
    "use strict";

    angular.module('public')
        .controller('infoController', infoController);

    infoController.$inject = ['UserService', 'ApiPath'];
    function infoController(UserService, ApiPath) {
        var controller = this;

        controller.user = UserService.getSavedUserInfo();
    }

})();
