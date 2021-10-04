var mySearchApp = angular   
                         .module("searchModule", [])
                         .controller("searchController", function($scope){
                             var tableDatas =[
                                 {name:"Shubham", Gender:"Male", City:"Deoghar"},
                                 {name:"Parmia", Gender:"Female", City:"Kolkata"},
                                 {name:"Maddy", Gender:"Male", City:"Pune"},
                                 {name:"Chandan", Gender:"Female", City:"Patna"},
                                 {name:"Babban", Gender:"Male", City:"Sagar"},

                             ];
                             $scope.tableDatas = tableDatas;

                             $scope.mySearch = function(item){
                                 if($scope.searchText == undefined){
                                     return true;
                                 }
                                 else {
                                     if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1  || 
                                        item.City.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                                         return true;
                                     }
                                 }

                                 return false;
                             }

                         });