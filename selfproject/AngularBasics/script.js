var myApp = angular.
                    module("myModule", [])
                    .controller("myController", function($scope){
                        var employee = {
                            firstName :'David',
                            lastName : 'Suraj',
                            gender : 'Male'
                        }
                        $scope.employee = employee;
                    });
//Controller is nothing but a js function

// var myController = function($scope){
//     $scope.message = "AngularJS tutorial"
// };

//name of controller and function name of myController which is anonymouse here so we'll use name as function

// myApp.controller("myController", myController);

//or we can write these line 10 as

// myApp.controller("myController", function($scope){
//     var employee = {
//         firstName :'David',
//         lastName : 'Suraj',
//         gender : 'Male'
//     }
//     $scope.employee = employee;
//    // $scope.message = "AngularJS tutorial"
// });

//in One line by method chaining
 
