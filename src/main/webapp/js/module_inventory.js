var inventoryCtrl = function($scope, dhConfig, dhProfile, dhInventory, dhStats) {
    $scope.conf = dhConfig;
    $scope.inventory = {};
    dhInventory.get(function(res) { $scope.inventory = res.data; });
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data; });
    $scope.stats = {};
    dhStats.get(function(res) { $scope.stats = res.data; });

    $scope.totalWeight = function() {
        var weight = 0;
        if ($scope.inventory.gears) {
            $scope.inventory.meleeWeapons.forEach(function(w) { weight += $scope.conf.meleeWeapons[w.name].weight });
            $scope.inventory.missileWeapons.forEach(function(w) { weight += $scope.conf.missileWeapons[w.name].weight });
            $scope.inventory.gears.forEach(function(g) {
                if ($scope.conf.armour[g.name]) weight += $scope.conf.armour[g.name].weight;
                else if ($scope.conf.gears[g.name]) weight += $scope.conf.gears[g.name].weight;
                else weight += 0.5;
            });
        }
        return weight;
    };
};