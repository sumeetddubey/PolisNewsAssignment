/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller('SourcesController', SourcesController);

    function SourcesController(NewsService){
        var vm=this;

        vm.sources=[];
        function getAllSources(){
            NewsService.getAllSources()
                .then(
                    function(res){
                        vm.sources=res.data.sources;
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }

        getAllSources();
    }
})();