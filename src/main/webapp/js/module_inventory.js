var inventoryCtrl = function($scope, dhConfig, dhInventory) {
    $scope.conf = dhConfig;
    $scope.inventory = {};
    dhInventory.get(function(res) { $scope.inventory = res.data; });
};