(function () {
    "use strict";

    angular.module('public')
        .component('user', {
            templateUrl: 'src/public/info/user.html',
            bindings: {
                user: '<'
            },
            controller: userController
        });

    userController.$inject = ['ApiPath'];
    function userController (ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
    }

})();
