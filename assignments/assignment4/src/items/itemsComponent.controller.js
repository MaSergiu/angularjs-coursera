(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsComponentController', ItemsComponentController);

    ItemsComponentController.$inject = ['listOfItems'];
    function ItemsComponentController(listOfItems) {
        var controller = this;

        controller.returnedItems = listOfItems;
    }
})();