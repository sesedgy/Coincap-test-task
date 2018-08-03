// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'main',
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/main'});
}])
.constant('SETTINGS', {
  API_URL: "http://coincap.io"
});
