/**
 * Created by sumeetdubey on 4/4/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.service("UserService", UserService);

    function UserService($http){
        var api={
            loginUser: loginUser
        };
        return api;

        function loginUser(user){
            return $http.post("/api/login", user);
        }
    }
})();