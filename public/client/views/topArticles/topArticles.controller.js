/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller("TopArticlesController", TopArticlesController);

    function TopArticlesController(NewsService, UserService){
        var vm=this;

        vm.saveArticle=saveArticle;
        vm.convertDate = function(ipDate){
            var date = new Date(ipDate);
            return date.toString();
        };

        var favorites={};
        vm.isFavorite=function(article){
            if(article.url in favorites)
                return "client/static/icons/favoriteRed.png";
            return "client/static/icons/favorite.png";
        };

        vm.articles = NewsService.getArticles();
        console.log(vm.articles[0]);

        function saveArticle(article){
            UserService.saveArticle(UserService.getUser(), article)
                .then(
                    function(doc){
                        if(doc.status===201)
                            window.alert("already exists");
                        else{
                            favorites[article.url]=true;
                            console.log(favorites);
                        }
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }

    }
})();