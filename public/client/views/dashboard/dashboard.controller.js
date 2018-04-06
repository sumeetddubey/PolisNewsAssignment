/**
 * Created by sumeetdubey on 4/5/18.
 */

(function(){
    var app = angular.module('newsApp');
    app.controller("DashboardController", DashboardController);

    function DashboardController(UserService, NewsService, $location, $route, toastr){
        var vm=this;
        vm.getTopArticlesBySource = getTopArticlesBySource;
        vm.removeSourceForUser = removeSourceForUser;

        vm.user = UserService.getUser();
        getSourcesForUser(vm.user);


        function getSourcesForUser(user){
            NewsService.getSourcesFromApi()
                .then(
                    function(res){
                        NewsService.setSources(res.data.sources);
                        vm.sources=filterSourcesForUser(UserService.getCurrentSources(), NewsService.getSources());
                    },
                    function(err){
                        console.log(err);
                    }
                );
        }

        function filterSourcesForUser(userSources, sources){
            var result=[];
            for(var i in sources){
                for(var j in userSources){
                    if(sources[i]['id'] === userSources[j])
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

        function removeSourceForUser(sourceId){
            UserService.removeSourceForUser(UserService.getUser().username, sourceId)
                .then(
                    function(res){
                        UserService.setCurrentSources(res.data);
                        $route.reload();
                        toastr.success('Source deleted');
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }
    }
})();
