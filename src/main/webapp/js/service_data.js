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
            $http.get('/_ah/api/dh/v1/inventory/' + dhAuth.username).then(function(res) {
                if (!res.data.meleeWeapons) res.data.meleeWeapons = [];
                if (!res.data.missileWeapons) res.data.missileWeapons = [];
                if (!res.data.gears) res.data.gears = [];
                successFunc(res);
            }, errorFunc);

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
            $http.get('/_ah/api/dh/v1/profile/' + dhAuth.username).then(function(res) {
                if (!res.data.bionics) res.data.bionics = [];
                if (res.data.progress && !res.data.progress.previousRanks) res.data.progress.previousRanks = [];
                if (!res.data.psiPowers) res.data.psiPowers = [];
                successFunc(res);
            }, errorFunc);
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