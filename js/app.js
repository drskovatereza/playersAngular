
//var app = angular.module("playersApp", ["playersCtrl"]);

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});