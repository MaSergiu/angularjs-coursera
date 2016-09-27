(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;

        controller.found = MenuSearchService.getMatchedMenuItems();
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            //The URL for the REST Endpoint is https://davids-restaurant.herokuapp.com/menu_items.json.
            /*return $http(...).then(function (result) {
                // process result and only keep items that match
                var foundItems...

                // return processed items
                return foundItems;
            });*/
        }
    }

    foundItemsDirective.$inject = [];
    function foundItemsDirective() {
        var directive = this;
    }
})();