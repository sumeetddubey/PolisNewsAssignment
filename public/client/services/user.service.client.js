/**
 * Created by sumeetdubey on 4/4/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.service("UserService", UserService);

    function UserService($http, $rootScope){
        var api={
            loginUser: loginUser,
            getUser: getUser,
            setUser: setUser
        };
        return api;

        function loginUser(user){
            return $http.post("/api/login", user);
        }

        function getUser(){
            return $rootScope.user;
        }

        function setUser(user){
            $rootScope.user = user;
        }
    }
})();