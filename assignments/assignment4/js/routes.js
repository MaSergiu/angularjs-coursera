(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.template.html'
            })

            // Categories state
            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.template.html',
                controller: 'CategoriesComponentController as categories',
                resolve: {
                    listOfCategories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            // Items state
            .state('categories.items', {
                url: '/items/{itemId}',
                templateUrl: 'templates/items.template.html',
                controller: 'ItemsComponentController as items'
            });
    }

})();