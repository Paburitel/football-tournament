angular.module("footballTeam").component("footballTeam", { 

	templateUrl: "/football-team/football-team.html",
	bindings: {
		crew: "=teamRef"
	},
	controller: function($scope){

	}
})