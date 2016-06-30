angular.module("footballTournament").controller("footballTournament", ["$scope", "$http", function($scope, $http){
  $http({
    method: "GET",
    url: "first-group.json"
  }).then(function(response){
    $scope.teams = response.data;
  });
}]);
