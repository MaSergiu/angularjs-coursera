(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsComponentController', ItemsComponentController);

    ItemsComponentController.$inject = ['$stateParams', 'items'];
    function ItemsComponentController($stateParams, items) {
        var controller = this;

        var item = items[$stateParams.itemId];
        console.log(item);

        controller.name = item.name;
    }
})();