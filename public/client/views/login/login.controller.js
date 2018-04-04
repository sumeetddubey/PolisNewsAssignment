/**
 * Created by sumeetdubey on 4/4/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller('LoginController', LoginController);

    function LoginController(UserService, $location, $window){
        var vm=this;
        vm.login=login;

        function login(user){
            UserService.loginUser(user)
                .then(function(doc){
                    if(doc.data){
                        $location.url('/home');
                    }
                    else{
                        $window.alert('invalid credentials');
                    }
                },
                function(err){
                    console.log(err);
                })
        }
    }

})();