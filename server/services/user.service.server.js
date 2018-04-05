/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(app, db){
    app.post("/api/login", login);
    app.put('/api/user/articles/saved/:username', saveArticleForUser);
    app.get('/api/user/articles/saved', getSavedArticlesForUser);

    function login(req, res){
        var username = req.body.username;
        var user=db.get('users').find({username: username}).value();
        if(user){
            if(user.password === req.body.password)
                res.send(user);
            res.status(401).send();
        }
        res.status(401).send();
    }

    function saveArticleForUser(req, res){
        var username=req.params.username;
        var article=req.body;
        if(db.get('users').find({username:username}).get('savedArticles').find({'url': article.url}).value()){
            res.status(201).send();
            return;
        }
        var doc=db.get('users').find({username: username}).get('savedArticles').push(article).write();
        if(doc)
            res.send(doc);
        else
            res.status(400).send();
    }

    function getSavedArticlesForUser(req, res){
        var username=req.query.username;
        var articles=db.get('users').find({username:username}).get('savedArticles').value();
        if(articles)
            res.send(articles);
        else{
            res.status(400).send();
        }
    }
};