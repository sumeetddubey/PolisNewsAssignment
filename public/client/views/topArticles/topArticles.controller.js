/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller("TopArticlesController", TopArticlesController);

    function TopArticlesController(NewsService){
        var vm=this;

        vm.articles = NewsService.getArticles();
        console.log(vm.articles[0]);
    }
})();