angular.module('testApp', [])

.controller('MainController', function ($scope) {
	$scope.firstName = "Nazmuz";
	$scope.lastName = "Pranto";
	$scope.showLastName = false;

	$scope.hobbies = ['movies', 'coding'];

	$scope.toggle = function() {
		$scope.showLastName = (!$scope.showLastName);
	};
})