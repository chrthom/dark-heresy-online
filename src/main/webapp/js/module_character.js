var characterCtrl = function($scope, dhConfig, dhProfile) {
    $scope.conf = dhConfig;
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data; });

    $scope.toUpperCase = function(s) { return s.toUpperCase(); };
};