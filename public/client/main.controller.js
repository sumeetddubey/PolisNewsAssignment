/**
 * Created by sumeetdubey on 4/5/18.
 */
(function(){
    var app = angular.module("newsApp");

    app.controller('MainController', MainController);

    function MainController(UserService, $location){
        var vm=this;

        vm.loggedIn=function(){
            return (UserService.getUser() != null);
        };

        vm.logout=function(){
            UserService.setUser(null);
            $location.url('/login');
        }
    }
})();