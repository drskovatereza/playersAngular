


var app = angular.module('playersApp', []);
app.controller('playersCtrl', function($scope,$http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.players = 

    [

      {
        name: "Fred",
        surname: "Redwood",
        sex: "male",
        tier: "gold",
        email: "Fred@gmail.com"
      },
      {
        name: "Trevod",
        surname: "Banforth",
        sex: "male",
        tier: "gold",
        email: "Trevor@gmail.com"
      }
      ,
      {
        name: "James",
        surname: "Jamerson",
        sex: "male",
        tier: "gold",
        email: "James@gmail.com"
      },
      {
        name: "Raymond",
        surname: "Smith",
        sex: "male",
        tier: "Silver",
        email: "Raymond@gmail.com"
      },
      {
        name: "Jan",
        surname: "McRoi",
        sex: "male",
        tier: "Silver",
        email: "Raymond@gmail.com"
      },
      {
        name: "Fred",
        surname: "Redwood",
        sex: "male",
        tier: "gold",
        email: "Fred@gmail.com"
      },
      {
        name: "Trevod",
        surname: "Banforth",
        sex: "male",
        tier: "gold",
        email: "Trevor@gmail.com"
      }
      ,
      {
        name: "James",
        surname: "Jamerson",
        sex: "male",
        tier: "gold",
        email: "James@gmail.com"
      },
      {
        name: "Raymond",
        surname: "Smith",
        sex: "male",
        tier: "Silver",
        email: "Raymond@gmail.com"
      },
      {
        name: "Jan",
        surname: "McRoi",
        sex: "male",
        tier: "Silver",
        email: "Raymond@gmail.com"
      }
      
    ]

    /*
    $http.get('data/players-data.json')
       .then(function(res){
          $scope.playersData = res.data;                
    });
    */

   
});


/*
var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
  $http.get('players-data.json')
       .then(function(res){
          $scope.todos = res.data.players;                
        });
});
*/