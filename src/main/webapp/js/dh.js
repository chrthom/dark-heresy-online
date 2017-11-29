if (window.location.protocol != 'https:' && window.location.hostname != 'localhost')
    window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);

angular.module('dh', ['ionic', 'ngRoute']).config(function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'dhHome',
        templateUrl: 'pages/home.html'
    }).when('/profile', {
        controller: 'dhProfile',
        templateUrl: 'pages/profile.html'
    }).when('/inventory', {
        controller: 'dhInventory',
        templateUrl: 'pages/inventory.html'
    }).when('/onboarding', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding0.html'
    }).when('/onboarding/1', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding1.html'
    }).when('/onboarding/2', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding2.html'
    }).when('/onboarding/3', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding3.html'
    }).when('/onboarding/4', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding4.html'
    }).when('/onboarding/psi', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding_psi.html'
    }).when('/onboarding/done', {
        controller: 'dhOnboarding',
        templateUrl: 'pages/onboarding_done.html'
    }).otherwise({
        redirectTo: '/'
    })
})
.controller('dhMain', function($location) {
    /*
    dhProfile.get(null, function(res) {
        if (res.status == 404) $location.path('/onboarding');
        else console.log('Ein Fehler ist aufgetreten. Bitte vesuchen sie es später erneut.\n\n' + res.statusText);
    });
    */
})
.controller('dhHome', homeCtrl)
.controller('dhOnboarding', onboardingCtrl)
.controller('dhProfile', profileCtrl)
.factory('dhAuth', authService)
.factory('dhConfig', configService)
.factory('dhInventory', inventoryService)
.factory('dhProfile', profileService)
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