(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('JsonPath', 'https://davids-restaurant.herokuapp.com/menu_items.json')
        .directive('foundItems', FoundItemsDirective);

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var appController = this;

        /**
         * Searched term from input
         *
         * @type {string}
         */
        appController.searchTerm = "";

        /**
         * Provides matching items
         */
        appController.provideMatchingItems = function () {
            if(appController.searchTerm !== '') {
                var promise = MenuSearchService.getMatchedMenuItems(appController.searchTerm);
                promise.then(function (result) {
                    appController.found = result;
                    if(appController.found.length == 0){
                        //Set up message
                        appController.message = "Nothing found!"
                    }
                });
                //Reset message
                appController.message = "";
            } else {
                appController.found = [];
                appController.message = "Please insert keywords to search for!"
            }
        };

        /**
         * Removes item
         *
         * @param itemIndex Index of the item to remove
         */
        appController.removeItem = function (itemIndex) {
            appController.found.splice(itemIndex, 1);
        }

    }

    MenuSearchService.$inject = ['$http', 'JsonPath'];
    function MenuSearchService($http, JsonPath) {
        var service = this;

        /**
         * Gets matched items
         *
         * @param {string} searchTerm Term to find matching items
         * @returns {*} Returns array of matched items in a promise
         */
        service.getMatchedMenuItems = function (searchTerm) {
            //Ajax request to JSON
            return $http({
                method: 'GET',
                url: JsonPath
            }).then(function (result) {
                var menuItems = result.data.menu_items;

                var foundItems = [];
                angular.forEach(menuItems, function (valueObject, objectIndex) {
                    searchTerm = searchTerm.toLowerCase();
                    var itemDescription = valueObject.description;
                    if(itemDescription.indexOf(searchTerm) !== -1){
                        foundItems.push(valueObject);
                    }
                });

                return foundItems;
            }).catch(function (error) {
                console.log(error);
            });
        };
    }

    function FoundItemsDirective() {
        var directive = {
            templateUrl: 'foundItems.html',
            scope: {
                itemsFound: '<',
                onRemove: '&'
            },
            controller: foundItemsDirectiveController,
            controllerAs: 'directiveController',
            bindToController: true
        };

        return directive;
    }

    function foundItemsDirectiveController() {
        var directiveController = this;
    }
})();