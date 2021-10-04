var filterApp = angular
                        .module("filterModule", [])
                        .controller("filterController", function($scope){

                            var employees = [
                                {name: "Shubham", dateOfBirth: new Date("September 25 1995"), profession: "Software Engineer", salary:100000.936},
                                {name: "Sivam", dateOfBirth: new Date("September 23 1990"), profession: "Hardware Engineer", salary:40000.364},
                                {name: "Shubhi", dateOfBirth: new Date("September 05 1997"), profession: "Chemical Engineer", salary:80000},
                                {name: "Ravi", dateOfBirth: new Date("September 13 1980"), profession: "Chartered Accountant", salary:120000.943},
                                {name: "Psgd", dateOfBirth: new Date("September 21 1987"), profession: "Doctor", salary:100000.93},
                            ];

                            $scope.employees = employees;

                            $scope.rowLimit = 3;
                            $scope.sortColumn = "name";

                        });