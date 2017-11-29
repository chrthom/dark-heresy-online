var config = {};
var configService = function($http) {
    return config;
};

var inventoryService = function($http, dhAuth) {
    return {
        set: function(i, successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/inventory', i).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/inventory/' + dhAuth.username).then(successFunc, errorFunc);
        }
    };
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

var statsService = function($http, dhAuth) {
    return {
        set: function(s, successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/stats', s).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/stats/' + dhAuth.username).then(successFunc, errorFunc);
        }
    };
};