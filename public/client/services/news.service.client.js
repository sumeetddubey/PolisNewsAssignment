/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.service('NewsService', NewsService);

    function NewsService($http, $localStorage){
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
            return $localStorage.sources;
        }

        function setSources(sources){
            $localStorage.sources = sources;
        }

        function getTopArticlesBySource(sourceId){
            return $http.get('/api/news/articles/' +sourceId);
        }

        function getArticles(){
            return $localStorage.articles;
        }

        function setArticles(articles){
            $localStorage.articles = articles;
        }
    }
})();