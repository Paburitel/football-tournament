
function Controller() {
	var $scope = arguments[0],
	$http = arguments[1];

	$http({
		method: "GET",
		url: "first-group.json"
	}).then(function(response){
		$scope.teams = response.data;
		});
}
// Controller.$inject = ["$scope" , "$http"];
angular.module("footballTournament").controller("footballTournament",
 ["$scope" , "$http" , Controller] );
