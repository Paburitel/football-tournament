angular.module("footballGroup").component("footballGroup", {
  templateUrl: "/football-group/football-group.html",
  bindings: {
    teams: "=data",
    active: "="
  },
  controller: ['$scope', function($scope){
  }]
});
