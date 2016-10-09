(function () {
    'use strict';

    angular.module('MenuApp')
        .component('itemsComponent', {
            templateUrl: 'items.template.html',
            bindings: {
                item: '<'
            }
        });
})();