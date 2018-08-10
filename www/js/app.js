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

 
  $scope.details = {
   
  };
  $scope.activeMenu = 'list';

 (function(){
    getData();
 })();

 function getData(){
   $http.get("https://jsonplaceholder.typicode.com/posts").success(function(response){
        $scope.posts = response;
    });
 }

  $scope.createBlog = function () {
      $http({  
          url: "https://jsonplaceholder.typicode.com/posts",  
          dataType: 'json',  
          method: 'POST',  
          data: { 'title' : $scope.details.title , 'body': $scope.details.body },  
          headers: {  
              "Content-Type": "application/json"  
          }  
       }).success(function (response) {
        $scope.message = 'Your blog post successfully added.'
          $scope.value = response;  
          $scope.details = {};
       })  
         .error(function (error) {  
           $scope.message = 'failed to add post.'
            alert(error);  
         });  
  } 
 
});
