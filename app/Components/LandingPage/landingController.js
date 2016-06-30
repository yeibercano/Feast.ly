angular.module ('feastly.landing', [])
.controller('LandingController', function($scope, $location, Auth){

  $scope.username  = "";
  $scope.password  = "";
  $scope.show = false;

  $scope.login = function(){
    Auth.login($scope.username, $scope.password)
    .then(function(match){
      if(match === 'success'){
        $location.path('/home');
      } else {
        $scope.show = true;
      }

    });
    
  };
  $scope.register = function(){
    Auth.register($scope.username, $scope.password)
    .then(function(){
      console.log("Register Successful");
      $location.path('/login');
    });
  };
});

