angular.module('athleteController', [])
	.controller('mainController', ['$scope','$http','Athletes', function($scope, $http, Athletes) {
		$scope.formData = {};
		$scope.loading = true;

    Athletes.get()
        .success(function(data) {
            $scope.athletes = data;
            $scope.loading = false;
    });

    $scope.createAthlete = function() {
        $scope.loading = true;
        console.log($scope.formData);
        Athletes.create($scope.formData)
            .success(function(data) {
                $scope.loading = false;
                $scope.formData = {};
                $scope.athletes = data; 
            });
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