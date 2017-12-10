var config = {};
var configService = function($http) {
    return config;
};

var inventoryService = function($http, dhAuth) {
    return {
        set: function(i, successFunc, errorFunc) {
            i['@class'] = 'net.christopherthomsen.dhonline.container.Inventory';
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/inventory', {
                username: dhAuth.player().username,
                password: dhAuth.player().password,
                container: i
            }).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/inventory/' + dhAuth.player().username).then(function(res) {
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
            p['@class'] = 'net.christopherthomsen.dhonline.container.Profile';
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/profile', {
                username: dhAuth.player().username,
                password: dhAuth.player().password,
                container: p
            }).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/profile/' + dhAuth.player().username).then(function(res) {
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
            s['@class'] = 'net.christopherthomsen.dhonline.container.Stats';
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.post('/_ah/api/dh/v1/stats', {
                username: dhAuth.player().username,
                password: dhAuth.player().password,
                container: s
            }).then(successFunc, errorFunc);
        },
        get: function(successFunc, errorFunc) {
            successFunc = typeof successFunc !== 'undefined' ? successFunc : function() {};
            errorFunc = typeof errorFunc !== 'undefined' ? errorFunc : function() {};
            $http.get('/_ah/api/dh/v1/stats/' + dhAuth.player().username).then(successFunc, errorFunc);
        }
    };
};