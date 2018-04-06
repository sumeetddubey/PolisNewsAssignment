/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller("SavedArticlesController", SavedArticlesController);

    function SavedArticlesController(UserService){
        var vm=this;

        vm.convertDate = function(ipDate){
            var date = new Date(ipDate);
            return date.toString();
        };

        UserService.getSavedArticlesForUser(UserService.getUser().username)
            .then(function(doc){
                vm.articles=doc.data;
            },
            function(err){
                console.log(err);
            })

    }
})();