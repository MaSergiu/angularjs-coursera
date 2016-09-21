(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

    /**
     * Handles "To buy" list
     *
     * @param ShoppingListCheckOffService
     * @constructor
     */
    function ToBuyShoppingController(ShoppingListCheckOffService) {
        var toBuyController = this;

        toBuyController.toBuyItems = ShoppingListCheckOffService.getToBuyList();

        toBuyController.buy = function (itemToRemove) {
            ShoppingListCheckOffService.removeItemFromToBuyList(itemToRemove);
        }
    }

    /**
     * Handles "Already bought" list
     *
     * @param ShoppingListCheckOffService
     * @constructor
     */
    function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
        var boughtController = this;

        boughtController.boughtItems = ShoppingListCheckOffService.getAlreadyBoughtList();
    }

    /**
     * Stores the items for "To buy" and "Already bought" lists
     * Handles all the actions that can be done over those lists
     *
     * @constructor
     */
    function ShoppingListCheckOffService() {
        var service = this;

        /**
         * Items from "To buy" list
         *
         * @type {*[]} Array of objects
         */
        var toBuyList = [
            {name: 'Cookies',   quantity: '10 packs'},
            {name: 'Bread',     quantity: '1 piece'},
            {name: 'Water',     quantity: '2L'},
            {name: 'Milk',      quantity: '1.5L'},
            {name: 'Potatoes',  quantity: '3Kg'},
            {name: 'Orange',    quantity: '1Kg'}
        ];

        /**
         * Items from "Already bought" list
         *
         * @type {Array}
         */
        var alreadyBoughtList = [];

        /**
         * Returns "To buy" list
         *
         * @returns {*[]} Array of objects
         */
        service.getToBuyList = function () {
            return toBuyList;
        };

        /**
         * Returns "Already bought" list
         *
         * @returns {Array} Array of objects
         */
        service.getAlreadyBoughtList = function () {
            return alreadyBoughtList;
        };

        /**
         * Removes items from "To buy" list after adding them to "Already bought" list
         *
         * @param itemToRemove Item to be removed
         */
        service.removeItemFromToBuyList = function (itemToRemove) {
            //Add item that is going to be removed to bought items before removing it, while it still exists
            addItemToAlreadyBoughtList(toBuyList[itemToRemove]);

            //Remove item
            toBuyList.splice(itemToRemove, 1);
        };

        /**
         * Adds item to "Already bought" list
         *
         * @param itemToAdd Item to be added
         */
        function addItemToAlreadyBoughtList(itemToAdd) {
            alreadyBoughtList.push(itemToAdd);
        }
    }
})();