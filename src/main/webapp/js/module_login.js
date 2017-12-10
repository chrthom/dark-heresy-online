var loginCtrl = function($scope, $location, dhAuth) {
    $scope.auth = dhAuth;
    $scope.user = {};
    $scope.login = function() {
        dhAuth.login($scope.user, function(res) {
            console.log("Success => " + JSON.stringify(res)); //
            console.log(dhAuth.player()); ////
            $location.path('/');
        }, function(res) {
            console.log("Failed => " + JSON.stringify(res)); ////
        });
    };
};