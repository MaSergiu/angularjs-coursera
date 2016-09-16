(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        /**
         * Default messages
         *
         * @type {string}
         */
        var enjoyMessage = 'Enjoy!';
        var tooMuchMessage = 'Too much!';
        var noDataMessage = 'Please enter data first';

        /**
         * Message to be displayed
         *
         * @type {string}
         */
        var message = "";

        /**
         * Sets the message that needs to be displayed based on number of items
         */
        $scope.setMessage = function () {
            var menuItems = getMenuItems();

            if (!menuItems){
                message = noDataMessage;
            } else {
                removeEmptyItems(menuItems);
                if (menuItems.length > 0 && menuItems.length <= 3) {
                    message = enjoyMessage;
                } else if (menuItems.length> 3) {
                    message = tooMuchMessage;
                }
            }
        };

        /**
         * Gets all the items introduced by the user as array
         * Replaces all the spaces with empty string,
         * to facilitate the removal of empty items
         *
         * @returns {Array} Array with items
         */
        var getMenuItems = function () {
            if ($scope.lunchMenu) {
                return $scope.lunchMenu.replace(/\s*/g, "").split(",");
            }
        };

        /**
         * Removes empty items (like "") from array
         *
         * @param menuItems {Array} Array with items with
         * @returns {Array} Same array without empties
         */
        var removeEmptyItems = function (menuItems) {
            for (var i = 0; i < menuItems.length; i++) {
                var emptyIndex = menuItems.indexOf("");
                if (emptyIndex != -1) {
                    menuItems.splice(emptyIndex, 1);
                }
            }

            return menuItems;
        };

        /**
         * Displays the message
         *
         * @returns {string} The message to be displayed
         */
        $scope.displayMessage = function () {
            if (message != '') {
                return message;
            }
        };

        /**
         * Sets css class depending on the message
         *
         * @returns {string} Bootstrap css classes
         */
        $scope.setClass = function () {
            if (message == enjoyMessage || message == tooMuchMessage) {
                return 'text-success bg-success';
            } else {
                return 'text-danger bg-danger';
            }
        }
    }
})();