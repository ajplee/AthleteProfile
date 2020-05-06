angular.module('athleteController', [])
	.controller('mainController', ['$scope','$http','Athletes', function($scope, $http, Athletes) {
		$scope.formData = {};
		$scope.loading = true;

		$scope.stage = "";
		$scope.gender = ["Male", "Female"];
        $scope.bool = ["true", "false"];
		// Move to database
		$scope.sports = 
			["Golf",
			"Tennis",
			"Cricket",
			"Basketball",
			"Baseball",
			"American Football",
			"Aquatics",
			"Archery",
			"Automobile Racing",
			"Badminton",
			"Beach Volleyball",
			"Bobsleigh",
			"Body Building",
			"Boxing",
			"Cross Country Running",
			"Cross Country Skiing",
			"Curling",
			"Cycling",
			"Darts",
			"Decathlon",
			"Down Hill Skiing",
			"Equestrianism",
			"eSports",
			"Fencing",
			"Field Hockey",
			"Figure Skating",
			"Gymnastics",
			"Ice Hockey",
			"Martial Arts",
			"Mixed Martial Arts",
			"Modern Pentathlon",
			"Motorcycle Racing",
			"Netball",
			"Polo",
			"Racquetball",
			"Rowing",
			"Rugby",
			"Sailing",
			"Softball",
			"Shooting",
			"Skateboarding",
			"Skeet Shooting",
			"Skeleton",
			"Snow Boarding",
			"Soccer (Football)",
			"Squash",
			"Surfing",
			"Swimming",
			"Track and Field"
		];

		$scope.formData = {
			FirstName: "",
			LastName: "",
			DateOfBirth: "",
			Nationality: "",
			Location: "",
			Association: "",
			Team: "",
			Gender: "",
			Sports: "",
			About: "",
			Interests: "",
			Charities: "",
			Pets: "",
			DrinksAlcohol: "",
            Married: "",
            facebook: "",
            twitter: "",
            instagram: ""
        };

        $scope.formData.SocialMediaHandles = {
            'facebook' : $scope.formData.facebook,
            'twitter' : $scope.formData.twitter, 
            'instagram' : $scope.formData.instagram
        };
	
		$scope.next = function (stage) {
			$scope.formValidation = true;
			if ($scope.multiStepForm.$valid) {
				$scope.direction = 1;
				$scope.stage = stage;
				$scope.formValidation = false;
			}
		};
		$scope.back = function (stage) {
			$scope.direction = 0;
			$scope.stage = stage;
		};

		Athletes.get()
			.success(function(data) {
				$scope.athletes = data;
				$scope.loading = false;
			});

		$scope.createAthlete = function() {
			if ($scope.multiStepForm.$valid) {
				$scope.loading = true;
				console.log($scope.formData);
				Athletes.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
                        $scope.athletes = data; 
                        $scope.stage = "";
					});
			}
		};

		$scope.deleteAthlete = function(id) {
			$scope.loading = true;

			Athletes.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.athletes = data; 
				});
		};
	}]);