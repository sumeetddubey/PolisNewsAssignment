/**
 * Created by sumeetdubey on 4/6/18.
 */
(function(){
    var app = angular.module('newsApp');
    app.controller('RegisterController', RegisterController);

    function RegisterController(UserService, $location, toastr){
        var vm=this;
        vm.register=register;

        function register(user){
            if(user.password !== user.confirmPassword){
                toastr.error("Passwords don't match!");
                return;
            }
            UserService.createUser(user)
                .then(function(doc){
                        if(doc.status===201){
                            toastr.error('Username is taken. Please try another username');
                            return;
                        }
                        if(doc.data && doc.status===200){
                            UserService.setUser(doc.data);
                            $location.url('/dashboard');
                        }
                    },
                    function(err){
                        console.log(err);
                    })
        }


    }

})();