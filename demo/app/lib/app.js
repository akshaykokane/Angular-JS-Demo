var app = angular.module('demo-app',[])

//before you application is fired

app.config(function(){

});

//as your application run

app.run(function(){


});

//controller
app.controller('helloController', function($scope){

  $scope.message = "Hello World! What is scope?";
  $scope.fruits = ['apple', 'mango', 'orange'];

});
