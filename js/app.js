

var app = angular.module('playersApp', []);
app.controller('playersCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.playersData = 
    [
    {
    	name : "player1"
    },
    {
    	name : "player2"
    }
    ]

   
});