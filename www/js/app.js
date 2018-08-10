// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.controller('myCtrl', function($scope, $http) {
  $http.get("https://jsonplaceholder.typicode.com/users").success(function(response){
      $scope.user = [];
      $scope.dataForUser = response;
      for(var i=0, userData = response.length; i < userData; i++){
        var track = response[i];
        var allTracks = {
            id: track.id,
            name: track.name,
        };
        // console.log(allTracks);
        $scope.user.push(allTracks);
    }
  });

    $scope.createBlog = function (Data) {  
        var GetAll = new Object(); 
        GetAll.title = Data.title;  
        GetAll.body = Data.body; 

        $http({  
            url: "https://jsonplaceholder.typicode.com/posts",  
            dataType: 'json',  
            method: 'POST',  
            data: GetAll,  
            headers: {  
                "Content-Type": "application/json"  
            }  
         }).success(function (response) { 
            console.log("reponse data", response) 
            $scope.value = response;  
         })  
           .error(function (error) {  
              alert(error);  
           });  
    } 
 
});
