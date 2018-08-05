angular.module('main', ['myApp', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'modules/main/main.html',
            controller: 'MainController'
        });
    }]);