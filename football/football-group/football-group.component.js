angular.module("footballGroup").component("footballGroup", { 

	templateUrl: "football-group/football-group.html",
	bindings: {
		teams: "=data"
	},
	controller: function($scope){

		console.log($scope);
		// $scope.teams = $scope.$parent.teams;

		$scope.getGame = function(id1 , id2) {

			var team, game, games, goal,
			teams = $scope.teams;

			team = teams.filter(function(obj){

				if (obj.id == id1) {
					return obj;
				};
			});
			games = team[0].games;
			game = games.filter(function(obj){

				if (obj.id1 == id2 || obj.id2 == id2) {
					return team;
				};
			});

			game = game[0];

			if (game.id1 != id1) {
				game.id1 = id1;
				game.id2 = id2;
				goal = game.goals1;
				game.goals1 = game.goals2;
				game.goals2 = goal;
			};
			console.log(game);
			return game;
		}

	// $scope.getGame("an" , "ru");

	}
})