var homeCtrl = function($scope, dhConfig, dhInventory, dhProfile, dhStats, dhUtils) {
    $scope.conf = dhConfig;
    $scope.inventory = {};
    dhInventory.get(function(res) { $scope.inventory = res.data; });
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data; });
    $scope.stats = {};
    dhStats.get(function(res) { $scope.stats = res.data; });

    $scope.fileFormat = dhUtils.fileFormat;
};