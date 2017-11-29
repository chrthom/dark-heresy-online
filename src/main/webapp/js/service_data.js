var config = {};
var configService = function($http) {
    return config;
};

var profileService = function($http, dhAuth) {
    return {
        set: function(p, successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/profile', p).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/profile/' + dhAuth.username).then(successFunc, errorFunc);
        }
    };
};

var inventoryService = function($http, dhAuth) {
    return {
        set: function(p, successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/inventory', p).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/inventory/' + dhAuth.username).then(successFunc, errorFunc);
        }
    };
};