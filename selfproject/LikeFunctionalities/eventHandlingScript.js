var myEventApp = angular
                        .module("eventModule", [])
                        .controller("eventController", function($scope){
                            var technologies = [
                                {names : 'C#', likes: 0, dislikes: 0},
                                {names : 'ASP.NET', likes: 0, dislikes: 0},
                                {names : 'AngularJS', likes: 0, dislikes: 0},
                                {names : 'Java', likes: 0, dislikes: 0},
                                {names : 'SpringBoot', likes: 0, dislikes: 0}
                            ];
                            $scope.technologies = technologies;
                            
                            //Function for likes as increment technologies
                            $scope.incrementLikes = function(technology){
                                technology.likes++;
                            }

                            $scope.incrementDislikes = function(technology){
                                technology.dislikes++;
                            }

                        });