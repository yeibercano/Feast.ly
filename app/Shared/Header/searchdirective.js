angular.module('search.directive', [])

.controller('search.ctrl', ['$scope', 'Recipes', '$state', 'Recipe', function($scope, Recipes, $state, Recipe) {
  $scope.userInput = {};
  $scope.list = results;

  $scope.searchRecipes = function(input){
    input.toString();
    $scope.userInput['q'] = input.split(" ").join('+');
    console.log('this is the query:', $scope.userInput)
    Recipes.getRecipes($scope.userInput).then(function(data){
        console.log('data:',data)
         $scope.list = data.data;
          console.log('results:', $scope.list)
        // return data;
        //Look into this later
        if($state.current.url !== '/results'){
          console.log("Inside if Statement", $state.current.url)
          $state.go('results');
        } else {
          console.log("no!!!!!!!!!!!")
        $state.go($state.current, {}, {reload: true});          
        }
    })
  };

    $scope.showRecipe = function(value){
      console.log(value);
      thisRecipe = value;
    }
    $scope.showRecipe();
}]);
