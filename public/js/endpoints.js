angular.module('athleteService', [])
	.factory('Athletes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/athlete');
			},
			create : function(athlete) {
				console.log(athlete);
				return $http.post('/api/athlete', athlete);
			},
			delete : function(id) {
				return $http.delete('/api/athlete/' + id);
			}
		}
	}]);