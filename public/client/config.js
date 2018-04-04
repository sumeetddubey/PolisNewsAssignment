/**
 * Created by sumeetdubey on 4/4/18.
 */

(function(){
    var app=angular.module('newsApp');

    app.config(function($routeProvider){
        $routeProvider
            .when('/login', {
                templateUrl: 'client/views/login/login.view.html',
                controller: 'LoginController',
                controllerAs: 'model'
            })
            .when('/', {
                redirectTo: '/login'
            });

        $routeProvider
            .when('/home', {
                templateUrl: 'client/views/home/home.view.html',
                controller: 'HomeController',
                controllerAs: 'model'
            })
    })
})();