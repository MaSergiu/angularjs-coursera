(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsComponentController', ItemsComponentController);

    ItemsComponentController.$inject = ['$stateParams', 'listOfCategories', 'MenuDataService'];
    function ItemsComponentController($stateParams, listOfCategories, MenuDataService) {
        var controller = this;

        var category = listOfCategories[$stateParams.itemId];

        MenuDataService.getItemsForCategory(category.short_name).then(function (response) {
            controller.returnedItems = response;
        });
    }
})();