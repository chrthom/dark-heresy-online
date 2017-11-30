var statusCtrl = function($scope, dhConfig, dhProfile, dhStats) {
    $scope.conf = dhConfig;
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data; });
    $scope.stats = {};
    dhStats.get(function(res) { $scope.stats = res.data; });
};