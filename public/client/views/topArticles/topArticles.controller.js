/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller("TopArticlesController", TopArticlesController);

    function TopArticlesController(NewsService, UserService, toastr){
        var vm=this;

        vm.saveArticle=saveArticle;
        vm.convertDate = function(ipDate){
            var date = new Date(ipDate);
            return date.toString();
        };

        var favorites={};
        vm.isSaved=function(article){
            if(article.url in favorites)
                return "client/static/icons/favoriteRed.png";
            return "client/static/icons/favoriteWhite.png";
        };

        vm.articles = NewsService.getArticles();

        function saveArticle(article){
            UserService.saveArticle(UserService.getUser(), article)
                .then(
                    function(doc){
                        if(doc.status===201)
                            toastr.error('Article already exists in saved articles!');
                        else{
                            favorites[article.url]=true;
                            toastr.success('Article saved');
                        }
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }
    }
})();