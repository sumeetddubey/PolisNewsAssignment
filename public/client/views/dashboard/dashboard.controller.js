/**
 * Created by sumeetdubey on 4/5/18.
 */

(function(){
    var app = angular.module('newsApp');
    app.controller("DashboardController", DashboardController);

    function DashboardController(UserService, NewsService, $location){
        var vm=this;
        vm.getTopArticlesBySource = getTopArticlesBySource;

        vm.user = UserService.getUser();
        getSourcesForUser(vm.user);


        function getSourcesForUser(user){
            NewsService.getSourcesFromApi()
                .then(
                    function(res){
                        NewsService.setSources(res.data.sources);
                        vm.sources=filterSourcesForUser(user, NewsService.getSources());
                    },
                    function(err){
                        console.log(err);
                    }
                );
        }

        function filterSourcesForUser(user, sources){
            var result=[];
            for(var i in sources){
                for(var j in user.newsSources){
                    if(sources[i]['id'] === user.newsSources[j])
                       result.push(sources[i]);
                }
            }
            return result;
        }

        function getTopArticlesBySource(sourceId){
            NewsService.getTopArticlesBySource(sourceId)
                .then(
                    function(res){
                        NewsService.setArticles(res.data.articles);
                        $location.url('/topArticles');
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }
    }
})();
