
feastly.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
    //STATES
     .state('footer', {
      url: '',
      templateUrl: '/Shared/Footer/footerview.html',
    })
    .state('home', {
      url: '/home',
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'homeViewCtrl',
      authenticate: true
    })
    .state('register', {
      url: '/register',
      templateUrl: 'Components/LandingPage/register.html',
      controller: 'LandingController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'Components/LandingPage/login.html',
      controller: 'LandingController'
    })
    .state('recipe', {
      url: '/recipes',
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl',
      authenticate: true
    })
     .state('results', {
      url: '/results',
      templateUrl: 'Components/SearchResults/resultsview.html',
      controller: 'search.ctrl',
      // controller: 'ResultsController',
      authenticate: true
    });

     $locationProvider.html5Mode({ enabled: true, requireBase: false })
});