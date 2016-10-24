(function () {
    "use strict";

    angular.module('public')
        .component('user', {
            templateUrl: 'src/public/info/user.html',
            bindings: {
                user: '<'
            }
        });

})();
