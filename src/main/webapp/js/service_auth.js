var authService = function($http) {
    var player = {};
    return {
        username: 'test',
        gender: 'w',
        player: function() { return player; },
        login: function(login, successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/auth', login).then(function(res) {
                player = res.data;
                successFunc(res);
            }, errorFunc);
        }
    };
};