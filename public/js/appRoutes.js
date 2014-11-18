/**
 * Created by wilso_000 on 11/18/2014.
 */
angular.module('appRoutes',[]).config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {templateUrl: 'views/home.html',controller: 'MainController'}) 	//home page
		.when('/nerds', {templateUrl: 'views/nerd.html',controller: 'NerdController'}); //nerd page, will user NerdController

	$locationProvider.html5Mode(true);

}]);