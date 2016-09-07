


var app = angular.module('playersApp', []);


app.controller('playersCtrl', function($scope,$http) {
    
    $scope.formVisible    = false;
    $scope.sortType       = 'name'; // set the default sort type
    $scope.sortReverse    = false;  // set the default sort order



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
        tier: "silver",
        email: "Raymond@gmail.com"
      },
      {
        name: "Jan",
        surname: "McRoi",
        sex: "male",
        tier: "silver",
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
        name: "Jane",
        surname: "Smith",
        sex: "female",
        tier: "silver",
        email: "Jane@gmail.com"
      },
      {
        name: "Jan",
        surname: "McRoi",
        sex: "male",
        tier: "silver",
        email: "Raymond@gmail.com"
      }
      
    ]
    

    

    /*
    $scope.players = null;
    $http.get('players-data.json'}).
        success(function(data, status, headers, config) {
            $scope.players=data;
        }).error(function(data, status, headers, config) { 
           alert('JSON error');      
    });
    */

    // add a new player
    $scope.newPlayer = {};
    
    $scope.addPlayer = function() {
      
      var newName = $scope.name;
      var newSurname = $scope.surname;
      var newSex = $scope.sex;
      var newTier = $scope.tier;
      var newEmail = $scope.email;
      //alert(newName+' '+newSurname+' '+newSex+' '+newTier+' '+newEmail);
      
      
      var newPlayer = {
        name : newName,
        surname : newSurname,
        sex : newSex,
        tier : newTier,
        email : newEmail
      }
      

     $scope.players.push(newPlayer);

     // reset form
     document.getElementById("newPlayerForm").reset();
     $( "#popup" ).css( "display" , "none" );

    }

    // select player
    $scope.rowSelected= function(row){
      $scope.selectedRow = row; 
    }
 

    //launch form
    $scope.launchForm= function(){
    //$scope.msg = 'clicked';
    $scope.formVisible = true; 
     $( "#popup" ).css( "display" , "block" );
     
    }
   
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