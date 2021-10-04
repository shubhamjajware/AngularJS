var myThirdApp = angular
                        .module("myThirdModule", [])
                        .controller("myThirdController", function($scope){
                            var persons =[
                                {firstName: "Chankaya", lastName: "Raj",capital: "deoghar"},
                                {firstName: "Chinkaya", lastName: "Rajasthan",capital: "kolkata"},
                                {firstName: "Charkay", lastName: "Raju",capital: "atlipa"},
                                {firstName: "kaya", lastName: "Rajiya",capital: "Patli"},
                                {firstName: "Chan", lastName: "Rajos",capital: "putra"},
                        ];
                            $scope.persons = persons;
                        });
