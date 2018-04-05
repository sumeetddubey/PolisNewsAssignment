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
            });

        $routeProvider
            .when('/sources', {
                templateUrl: 'client/views/sources/sources.view.html',
                controller: 'SourcesController',
                controllerAs: 'model'
            });

        $routeProvider
            .when('/dashboard', {
                templateUrl: 'client/views/dashboard/dashboard.view.html',
                controller: 'DashboardController',
                controllerAs: 'model'
            });

        $routeProvider
            .when('/topArticles', {
                templateUrl: 'client/views/topArticles/topArticles.view.html',
                controller: 'TopArticlesController',
                controllerAs: 'model'
            })

    })
})();