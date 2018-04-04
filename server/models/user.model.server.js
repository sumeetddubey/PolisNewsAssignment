/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(db){
    var q = require('q');

    var api={
        findUserByUsername: findUserByUsername
    };

    return api;

    function findUserByUsername(username){
        var deferred = q.defer();
        var user= db.get('users').find({username: username}).value();
        deferred.resolve(user);
        return deferred.promise;
    }
};



