(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$http', 'ApiPath'];
    function MenuService($http, ApiPath) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };

        service.getMenuItems = function (category) {
            var config = {};
            if (category) {
                config.params = {'category': category};
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
                return response.data;
            });
        };
        
        service.saveUserInfo = function (user) {
            var config = {};

            return $http.get(ApiPath + '/menu_items.json', config)
                .then(function (response) {
                    var itemFound = false;
                    angular.forEach(response.data.menu_items, function (value, key) {
                        if (user.favouriteDish == value.short_name) {
                            itemFound = true;
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
