/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.service('NewsService', NewsService);

    function NewsService($http, $rootScope){
        var api={
            getSourcesFromApi: getSourcesFromApi,
            getSources: getSources,
            setSources: setSources,
            getTopArticlesBySource: getTopArticlesBySource,
            getArticles: getArticles,
            setArticles: setArticles
        };

        return api;

        function getSourcesFromApi(){
            return $http.get('/api/news/sources');
        }

        function getSources(){
            return $rootScope.sources;
        }

        function setSources(sources){
            $rootScope.sources = sources;
        }

        function getTopArticlesBySource(sourceId){
            return $http.get('/api/news/articles/' +sourceId);
        }

        function getArticles(){
            return $rootScope.articles;
        }

        function setArticles(articles){
            $rootScope.articles = articles;
        }
    }
})();