var inventoryCtrl = function($scope, dhConfig, dhInventory) {
    $scope.conf = dhConfig;
    $scope.inventory = {};
    dhInventory.get(function(res) { console.log(JSON.stringify(res.data)); $scope.inventory = res.data; });
};