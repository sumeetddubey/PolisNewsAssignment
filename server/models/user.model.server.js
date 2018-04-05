/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(db){
    var q = require('q');

    var api={
        findUserByUsername: findUserByUsername,
        saveArticleForUser: saveArticleForUser
    };

    return api;

    function findUserByUsername(username){
        var deferred = q.defer();
        var user= db.get('users').find({username: username}).value();
        deferred.resolve(user);
        return deferred.promise;
    }

    function saveArticleForUser(username, article){
        var deferred = q.defer();
        deferred.resolve(db.get('users').find({username: username}).get('newsSources').push('abc').write());
        return deferred.promise;
    }

};



