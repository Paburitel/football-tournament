angular.module("footballGroup").factory("gameScore" , function(){
	return {
		getScore: function(game){
			return "0:0";
			},
		staticProperty: "Hello"
	}

});
angular.module("footballGroup").service("scoreServise" , function(){
	return {
		getScore: function(game){
			},
		staticProperty: "Hello"
	}
})
