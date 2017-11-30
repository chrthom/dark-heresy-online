if (window.location.protocol != 'https:' && window.location.hostname != 'localhost')
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);

angular.module('dh', ['ionic', 'ngRoute']).config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'home',
        templateUrl: 'pages/home.html'
    }).when('/character', {
        controller: 'character',
        templateUrl: 'pages/character.html'
    }).when('/status', {
        controller: 'status',
        templateUrl: 'pages/status.html'
    }).when('/inventory', {
        controller: 'inventory',
        templateUrl: 'pages/inventory.html'
    }).when('/career', {
        controller: 'career',
        templateUrl: 'pages/career.html'
    }).when('/onboarding', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding0.html'
    }).when('/onboarding/1', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding1.html'
    }).when('/onboarding/2', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding2.html'
    }).when('/onboarding/3', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding3.html'
    }).when('/onboarding/4', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding4.html'
    }).when('/onboarding/50', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding_psi.html'
    }).when('/onboarding/99', {
        controller: 'onboarding',
        templateUrl: 'pages/onboarding_done.html'
    }).otherwise({
        redirectTo: '/'
    })
})
.controller('dhMain', function($scope, $location, dhProfile) {
    dhProfile.get(function(res) {
        if (res.data.onboardingStep < 100) $location.path('/onboarding/' + res.data.onboardingStep);
    },
    function(res) {
        if (res.status == 404) $location.path('/onboarding');
        else console.log('Ein Fehler ist aufgetreten. Bitte vesuchen sie es später erneut.\n\n' + res.statusText);
    });
    $scope.$on('$routeChangeStart', function($event, next, current) {
        if (next.$$route.originalPath.startsWith('/onboarding')) $scope.pageTitle = 'Charaktererstellung';
        else switch(next.$$route.originalPath) {
            case '/': $scope.pageTitle = 'Übersicht'; break;
            case '/chracter': $scope.pageTitle = 'Characterprofil'; break;
            case '/inventory': $scope.pageTitle = 'Inventar'; break;
            case '/career': $scope.pageTitle = 'Karriere'; break;
        }
    });
})
.controller('home', homeCtrl)
.controller('onboarding', onboardingCtrl)
.controller('character', characterCtrl)
.controller('status', statusCtrl)
.controller('inventory', inventoryCtrl)
.controller('career', careerCtrl)
.factory('dhAuth', authService)
.factory('dhConfig', configService)
.factory('dhInventory', inventoryService)
.factory('dhProfile', profileService)
.factory('dhStats', statsService)
.factory('dhUtils', utilsService)
.filter('filterArrays', function(dhUtils) {
  return function(input) {
    return !input ? [] : input.filter(dhUtils.isArray);
  };
}).filter('filterValues', function(dhUtils) {
  return function(input) {
    return !input ? [] : input.filter(dhUtils.isValue);
  };
});