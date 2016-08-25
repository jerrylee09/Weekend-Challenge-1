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
	$scope.DeleteInfo = function () {
		
		$scope.total -= ($scope.employee.salary/12);
		this.parentNode.splice(0);
	}
	
  //   $scope.increment = function(number) {
  //   $scope.total += number;
  // }


  //   $('#container').on('click','button', function() {
  //     var personPrice = $(this).data("salary");
  //     var totalPrice = $(totalSal());
  //     var newTotal = totalPrice[0] - personPrice;

  //     $('.totalSalary').append(newTotal);
  //     $(this).parent().remove();
      
  //     // console.log(totalPrice[0]);
  //     // console.log($(this).data("salary"));
  //     // console.log(newTotal);
  //     // console.log(typeof totalPrice);
  //     // console.log('total price',totalPrice);
  //     // console.log('total price', totalPrice[0]);
  //     // console.log(typeof personPrice);
  //     totalSal();
  //   });

}]);