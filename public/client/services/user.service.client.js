/**
 * Created by sumeetdubey on 4/4/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.service("UserService", UserService);

    function UserService($http, $localStorage){
        var api={
            loginUser: loginUser,
            getUser: getUser,
            setUser: setUser,
            saveArticle: saveArticle,
            getSavedArticlesForUser: getSavedArticlesForUser,
            deleteSavedArticleForUser: deleteSavedArticleForUser,
            addSourceForUser: addSourceForUser,
            removeSourceForUser: removeSourceForUser,
            getCurrentSources: getCurrentSources,
            setCurrentSources: setCurrentSources
        };
        return api;

        function loginUser(user){
            return $http.post("/api/login", user);
        }

        function getUser(){
            return $localStorage.user;
        }

        function setUser(user){
            $localStorage.user = user;
        }

        function saveArticle(user, article){
            return $http.put('/api/user/articles/saved/'+user.username, article);
        }

        function getSavedArticlesForUser(username){
            return $http.get('/api/user/articles/saved?username=' +username);
        }

        function deleteSavedArticleForUser(username, article){
            return $http.put('/api/user/' +username + '/articles/saved/', article);
        }

        function addSourceForUser(username, sourceId){
            return $http.put('/api/user/sources/'+username, sourceId);
        }

        function removeSourceForUser(username, sourceId){
            return $http.delete("/api/user/" +username +"/sources/" +sourceId);
        }

        function getCurrentSources(){
            return $localStorage.user.newsSources;
        }

        function setCurrentSources(sources){
            $localStorage.user.newsSources=sources;
        }
    }
})();