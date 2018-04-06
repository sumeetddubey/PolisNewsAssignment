/**
 * Created by sumeetdubey on 4/4/18.
 */
(function(){
    var app = angular.module("newsApp", ['ngRoute', 'ngStorage', 'toastr']);

    app.config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }]);
})();