var App = angular.module('dhonline', ['dhonlinemodels']);

App.controller('CoreCtrl', function($scope, $http, userConnector, playerConnector) {
  $scope.login = 'christopher.thomsen';
  initialise($scope, $http);
  dialogs($scope);
  
  var users = userConnector.query(function() {
    $scope.user = findName($scope.login, users);
    if ($scope.user.player)
      getPlayer($scope, playerConnector);
    else
      createPlayer($scope, playerConnector);
  });
  
  commonMethods($scope);
  characterGenerationMethods($scope);
  
  $scope.menuIsActive = function(name) {
    if (name == $scope.active.menu) return 'active';
    else if ($scope.menus[name].opened) return 'opened';
    return '';
  };
  $scope.injuryLevelActive = function(from, to) {
    var ratio = $scope.player.stats.wounds / $scope.player.progress.wounds;
    return ratio >= from && ratio < to ? 'active' : '';
  };
});

App.filter('filterArrays', function() {
  return function(input) {
    return input.filter(isArray);
  };
}).filter('filterValues', function() {
  return function(input) {
    return input.filter(isValue);
  };
});

function initialise($scope, $http) {
  loadConstants($scope);
  loadConfig($scope, $http);
  $scope.active = {};
  $scope.active.menu = '';
  $scope.active.gameStatus = 'Lädt ...';
  $scope.form = {};
}

function getPlayer($scope, playerConnector) {
  playerConnector.get({
    id : $scope.user.player
  }, function(player) {
    $scope.player = player;
    $scope.active.gameStatus = 'Spielvorbereitung';
    if (player.helpers.creationStep < 100) {
       $scope.active.gameStatus = 'Charaktererschaffung';
       $scope.openDialog('Charaktererschaffung');
    }
  });
}

