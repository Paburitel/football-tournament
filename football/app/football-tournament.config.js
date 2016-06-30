angular.module("footballTournament").config(["$routeProvider", "$locationProvider",
    function($routeProvider, $locationProvider){
      $locationProvider.hashPrefix('!');
      $routeProvider.when("/group", {
        template: '<football-group data="teams" active="activeTeam"></football-group>',
        controller: 'footballTournament'
      }).
      otherwise('/group')
    }])
