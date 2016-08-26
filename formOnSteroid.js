var myApp = angular.module('myApp', []);

myApp.controller('employeeController', ['$scope', function($scope) {
	console.log('angular testing!');
	$scope.employees =[];
	$scope.employee = {};
	$scope.total = 0;

	// console.log(employee);
	$scope.AddInfo = function() {
		$scope.employees.push({
		firstname: $scope.employee.firstname,
		lastname: $scope.employee.lastname,
		id: $scope.employee.id,
		jobtitle: $scope.employee.jobtitle,
		salary: $scope.employee.salary
		});

		$scope.total += ($scope.employee.salary / 12);
	}
	$scope.DeleteInfo = function(employee) { 
	  var index = $scope.employees.indexOf(employee);
	  console.log(index);
	  $scope.employees.splice(index, 1);
	  $scope.total -= ($scope.employee.salary / 12);

	}


}]);