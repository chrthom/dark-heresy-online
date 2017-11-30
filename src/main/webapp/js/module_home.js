var homeCtrl = function($scope, dhConfig, dhInventory, dhProfile, dhStats) {
    $scope.pageTile = 'Übersicht';
    $scope.conf = dhConfig;
    $scope.inventory = {};
    dhInventory.get(function(res) { $scope.inventory = res.data });
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data });
    $scope.stats = {};
    dhStats.get(function(res) { $scope.stats = res.data });
};