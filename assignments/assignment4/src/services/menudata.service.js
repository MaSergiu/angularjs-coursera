(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('CategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('ItemsForCategoryPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

    MenuDataService.$inject = ['$http', 'CategoriesPath', 'ItemsForCategoryPath'];
    function MenuDataService($http, CategoriesPath, ItemsForCategoryPath) {
        var service = this;

        /**
         * Gets all categories
         *
         * @returns {*}
         */
        service.getAllCategories = function () {

            return $http({
                method: 'GET',
                url: CategoriesPath
            }).then(function (response) {

                return response.data;
            });
        };

        /**
         * Gets all items for a specific category
         *
         * @param categoryShortName Category's short name
         * @returns {*}
         */
        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: 'GET',
                url: ItemsForCategoryPath + categoryShortName
            }).then(function (response) {

                return response.data.menu_items;
            });
        };
    }
})();