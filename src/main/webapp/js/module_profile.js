console.log("MAPP");

var profileCtrl = function($scope, dhConfig, dhProfile) {
console.log("BLAAAA"); //
    $scope.pageTitle = 'Profil';
    $scope.conf = dhConfig;
    $scope.profile = {};
    dhProfile.get(function(res) { $scope.profile = res.data });
};