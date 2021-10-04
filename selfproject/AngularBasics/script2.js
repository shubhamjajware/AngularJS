var mySecApp = angular
                        .module("mySecondModule", [])
                        .controller("mySecondController", function($scope){
                            var country ={
                                name: "Chankaya",
                                capital: "Patliputra",
                                flag : "/chanakya.jpg"
                            }
                            $scope.country = country;
                        });
