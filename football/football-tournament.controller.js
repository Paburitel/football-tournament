angular.module("footballTournament").controller("footballTournament",
	function($scope){

		$scope.teams = [
		{
			id: "wl",
			name: "Уэльс",
			games: [ 
					{
					id1: "wl",
					id2: "wl",
					goals1: null,
					goals2: null
				},
				{
					id1: "wl",
					id2: "ru",
					goals1: 1,
					goals2: 1,
					played: true
				},
				{
					id1: "wl",
					id2: "an",
					goals1: null,
					goals2: null,
					played: false
				},
					{
					id1: "wl",
					id2: "sl",
					goals1: 3,
					goals2: 2,
					played: true
				}
			]
		},
		{
			id: "ru",
			name: "Россия",
			games: [
				{
					id1: "ru",
					id2: "wl",
					goals1: 1,
					goals2: 1,
					played: true
				},
				{
					id1: "ru",
					id2: "ru",
					goals1: null,
					goals2: null
				},
				{
					id1: "ru",
					id2: "an",
					goals1: 5,
					goals2: 0,
					played: true
				},
				{
					id1: "ru",
					id2: "sl",
					goals1: null,
					goals2: null,
					played: false
				}
			]
		},
		{
			id: "an",
			name: "Англия",
			games: [
				{
					id1: "an",
					id2: "wl",
					goals1: null,
					goals2: null,
					played: false

				},
				{
					id1: "ru",
					id2: "an",
					goals1: 5,
					goals2: 0,
					played: true
				},
				{
					id1: "an",
					id2: "an",
					goals1: null,
					goals2: null
				},
				{
					id1: "an",
					id2: "sl",
					goals1: 0,
					goals2: 3,
					played: true
				}
			]
		},
			
		{
				id: "sl",
				name: "Словакия",
				games: [ 
					{
						id1: "sl",
						id2: "wl",
						goals1: 2,
						goals2: 3,
						played: true
					},
					{
						id1: "sl",
						id2: "ru",
						goals1: null,
						goals2: null,
						played: false
					},
					{
						id1: "sl",
						id2: "an",
						goals1: 3,
						goals2: 0,
						played: true
					},
					{
						id1: "sl",
						id2: "sl",
						goals1: null,
						goals2: null
					}
				]
		}
	];


	})