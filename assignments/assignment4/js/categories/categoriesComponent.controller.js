(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesComponentController', CategoriesComponentController);

    CategoriesComponentController.$inject = ['MenuDataService', 'listOfCategories'];
    function CategoriesComponentController(MenuDataService, listOfCategories) {
        var controller = this;

        controller.returnedCategories = listOfCategories;
    }
})();