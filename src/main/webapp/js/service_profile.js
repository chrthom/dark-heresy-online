var profileService = function($http) {
    var profile = null;
    return {
        get: function(successFunc, errorFunc) {
            errorFunc({status: 404}); // Testing
        },
        save: function(successFunc, errorFunc) {
            
        },
        set: function(p) { profile = p }
    };
};