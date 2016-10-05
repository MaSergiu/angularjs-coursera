(function () {
    'use strict';

    angular.module('data', ['MenuDataService'])
        .controller('dataModuleController', dataModuleController);

    dataModuleController.$inject = [];
    function dataModuleController () {
        var controller = this;

        controller.getAllCategories = function () {

        };

        controller.getItemsForCategory = function (categoryShortName) {

        };
    }
})();