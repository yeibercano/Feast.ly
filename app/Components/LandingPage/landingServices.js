angular.module('landing.services',[])
.factory('Auth', function($http){
  var register = function(username,password){
    return $http({
      method: "POST",
      url: "https://morning-lake-17329.herokuapp.com/api/register",
      data: {username: username, password: password}
    });
  };
  var login = function(username,password){
    return $http({
      method: "POST",
      url: "https://morning-lake-17329.herokuapp.com/api/login",
      data: {username: username, password: password}
    }).then(function(res){
      return res.data;
    });
  };
  return{
    register:register,
    login:login
  };
});