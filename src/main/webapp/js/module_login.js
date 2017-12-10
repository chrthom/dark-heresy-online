var loginCtrl = function($scope, $location, dhAuth) {
    $scope.auth = dhAuth;
    $scope.user = {};
    $scope.error = '';
    $scope.login = function() {
        dhAuth.login($scope.user, function(res) {
            $location.path('/');
        }, function(res) {
            switch (res.data.error.code) {
                case 403 : $scope.error = 'Das eingegebene Passwort ist inkorrekt'; break;
                case 404 : $scope.error = 'Der Benutzer "' + $scope.user.username + '" existiert nicht'; break;
                default : $scope.error = 'Ein unerwarteter Fehler ist aufgetreten'
            }
        });
    };
};