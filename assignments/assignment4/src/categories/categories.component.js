(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoriesComponent', {
            templateUrl: 'categories.template.html',
            bindings: {
                category: "<"
            }
        });
})();