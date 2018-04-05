/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.service('NewsService', NewsService);

    function NewsService($http){
        var api={
            getAllSources: getAllSources
        };

        return api;

        function getAllSources(){
            return $http.get('/api/news/sources');
        }
    }
})();