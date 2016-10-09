(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesComponentController', CategoriesComponentController);

    CategoriesComponentController.$inject = ['listOfCategories'];
    function CategoriesComponentController(listOfCategories) {
        var controller = this;

        controller.returnedCategories = listOfCategories;
    }
})();