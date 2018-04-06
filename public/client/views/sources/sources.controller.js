/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller('SourcesController', SourcesController);

    function SourcesController(NewsService, UserService, toastr){
        var vm=this;

        vm.addSource=addSource;
        vm.sources=NewsService.getSources();
        var userSources=UserService.getCurrentSources();

        function addSource(sourceId){
            if(UserService.getCurrentSources().length>=5){
                toastr.error('You can follow up to 5 sources at once!');
                return;
            }
            UserService.addSourceForUser(UserService.getUser().username, {"sourceId":sourceId})
                .then(
                    function(doc) {
                        if(doc.status===201){
                            toastr.error('You already follow this source!');

                        }
                        else{
                            toastr.success('Success!');
                            UserService.setCurrentSources(doc.data);
                        }
                    },
                    function(err){
                        console.log(err);
                    }
                )
        }
    }
})();