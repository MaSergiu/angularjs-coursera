(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('CategoriesPath', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('ItemsForCategoryPath', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=');

    MenuDataService.$inject = ['$http', 'CategoriesPath', 'ItemsForCategoryPath'];
    function MenuDataService($http, CategoriesPath, ItemsForCategoryPath) {
        var service = this;

        service.getAllCategories = function () {

        };

        service.getItemsForCategory = function (categoryShortName) {

        };
    }
})();