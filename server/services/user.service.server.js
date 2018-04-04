/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(app, UserModel){
    app.post("/api/login", login);

    function login(req, res){
        var username = req.body.username;
        UserModel.findUserByUsername(username)
            .then(
                function(user){
                    if(user){
                        if(user.password===req.body.password)
                            res.status(200).send(user);
                        res.send(null);
                    }
                    res.status(201).send();
                },
                function(err){
                    console.log(err);
                    res.status(400).send(err);
                }
            )
    }
};