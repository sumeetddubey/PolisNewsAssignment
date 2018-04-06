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

            .when('/register', {
                templateUrl: 'client/views/register/register.view.html',
                controller: 'RegisterController',
                controllerAs: 'model'
            })

            .when('/sources', {
                templateUrl: 'client/views/sources/sources.view.html',
                controller: 'SourcesController',
                controllerAs: 'model'
            })

            .when('/dashboard', {
                templateUrl: 'client/views/dashboard/dashboard.view.html',
                controller: 'DashboardController',
                controllerAs: 'model'
            })

            .when('/topArticles', {
                templateUrl: 'client/views/topArticles/topArticles.view.html',
                controller: 'TopArticlesController',
                controllerAs: 'model'
            })

            .when('/savedArticles', {
                templateUrl: 'client/views/savedArticles/savedArticles.view.html',
                controller: 'SavedArticlesController',
                controllerAs: 'model'
            })

            .when('/', {
                redirectTo: '/login'
            });
    })
})();