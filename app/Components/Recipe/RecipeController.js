 angular.module ('feastly.recipe', [])

  .controller('RecipeViewCtrl', function($scope, Recipe) {
    $scope.getRecipe = function(){
      Recipe.showRecipe(thisRecipe).then(function(){
        // $scope.tellMe();
        $scope.recipeName = recipeViewRes.name;
        $scope.recipeImage = recipeViewRes.images[0].hostedLargeUrl;
        $scope.recipeIngredients = recipeViewRes.ingredientLines;
        $scope.recipeLink = recipeViewRes.source.sourceRecipeUrl;
      })
    
    }
    $scope.getRecipe();
    
  });