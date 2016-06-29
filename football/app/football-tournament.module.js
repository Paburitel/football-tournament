angular.module("footballTournament",["footballGroup" , "ngRoute"]).config([
	"$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider.when("/group" , {
			template: '<football-group data="teams" active="activeTeam" ng-if="visible"></football-group>'
		})
	}
]);
