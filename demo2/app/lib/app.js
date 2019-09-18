var app = angular.module('demo-app',['ngRoute'])

//before you application is fired

app.config(['$routeProvider', function($routeProvider){

  $routeProvider.
  when('/home',{
    templateUrl :'views/page1.html'
  }).
  when ('/page2',{
    templateUrl :'views/page2.html',
    controller : 'helloController'
  }).
  otherwise({
    redirectTo:'/home'
  })



}]);

//as your application run

app.run(function(){


});

//controller
app.controller('helloController', function($scope){

  $scope.message = "Hello World";
  $scope.fruits = ['apple', 'mango', 'orange'];

});
