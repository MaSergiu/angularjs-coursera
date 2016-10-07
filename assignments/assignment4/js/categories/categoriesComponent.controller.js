(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesComponentController', CategoriesComponentController);

    CategoriesComponentController.$inject = ['MenuDataService', 'listOfCategories'];
    function CategoriesComponentController(MenuDataService, listOfCategories) {
        var controller = this;

        controller.categories = listOfCategories;

        controller.getItemsForCategory = function (categoryShortName) {
            return MenuDataService.getItemsForCategory(categoryShortName).then(function (response) {

                return response;
            });
        }
    }
})();