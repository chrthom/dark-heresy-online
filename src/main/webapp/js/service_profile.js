var profileService = function($http) {
    return {
        get: function(successFunc, errorFunc) {
            errorFunc({status: 404}); // Testing
        },
        put: function(c, successFunc, errorFunc) {

        }
    };
};