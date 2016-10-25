(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);


    UserService.$inject = ['$http', 'ApiPath'];
    function UserService($http, ApiPath) {
        var service = this;

        service.saveUserInfo = function (user) {

            return $http.get(ApiPath + '/menu_items.json')
                .then(function (response) {
                    var itemFound = false;
                    angular.forEach(response.data.menu_items, function (value, key) {
                        if (user.favouriteDish == value.short_name) {
                            itemFound = true;
                            user.item = value;
                        }
                    });

                    if (itemFound) {
                        localStorage.setItem('userInfo', JSON.stringify(user));
                        response.message = "Your information has been saved!";

                        return response;
                    } else {
                        response.message = "No such menu number exists!";

                        return response;
                    }
                });
        };

        service.getSavedUserInfo = function () {
            var retrievedInfo = JSON.parse(localStorage.getItem('userInfo'));

            return retrievedInfo;
        }
    }

})();
