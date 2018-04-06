/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(app, db){
    app.post("/api/login", login);
    app.post('/api/register', register);
    app.put('/api/user/articles/saved/:username', saveArticleForUser);
    app.get('/api/user/articles/saved', getSavedArticlesForUser);
    app.put('/api/user/:username/articles/saved/', deleteSavedArticleForUser);
    app.get('/api/user/sources', getSourcesForUser);
    app.put('/api/user/sources/:username', addSourceForUser);
    app.delete('/api/user/:username/sources/:sourceId', deleteSourceForUser);

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

    function register(req, res){
        var username=req.body.username;
        var password=req.body.password;
        var user = db.get('users').find({username: username}).value();
        if(user){
            res.status(201).send();
            return;
        }
        db.get('users').push({
            'username': username,
            'password': password,
            'newsSources': [],
            'savedArticles': []
        }).write();
        user=db.get('users').find({'username': username}).value();
        res.status(200).send(user);
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
        var articles=db.get('users').find({username:username}).get('savedArticles').sortBy('publishedAt').reverse().value();
        if(articles)
            res.send(articles);
        else{
            res.status(400).send();
        }
    }

    function deleteSavedArticleForUser(req, res){
        var username=req.params.username;
        var articleUrl=req.body.articleUrl;
        var doc=db.get('users').find({username: username}).get('savedArticles').remove({"url": articleUrl}).write();
        if(doc.length>0) {
            var articles=db.get('users').find({username: username}).get('savedArticles').sortBy('publishedAt').reverse().value();
            res.send(articles);
        }
        else
            res.status(400).send();
    }

    function getSourcesForUser(req, res){
        var username=req.query.username;
        var sources=db.get('users').find({username:username}).get('newsSources').value();
        if(sources)
            res.send(sources);
        else{
            res.status(400).send();
        }
    }

    function addSourceForUser(req, res){
        var username=req.params.username;
        var sourceId=req.body.sourceId;
        if(db.get('users').find({username:username}).get('newsSources').find(function(n){return n===sourceId}).value()) {
            res.status(201).send();
            return;
        }
        var doc=db.get('users').find({username: username}).get('newsSources').push(sourceId).write();
        if(doc)
            res.send(doc);
        else
            res.status(400).send();
    }

    function deleteSourceForUser(req, res){
        var username=req.params.username;
        var sourceId=req.params.sourceId;
        var doc=db.get('users').find({username: username}).get('newsSources').remove(function(n){return n===sourceId}).write();
        if(doc.length>0) {
            var sources=db.get('users').find({username: username}).get('newsSources').value();
            res.send(sources);
        }
        else
            res.status(400).send();
    }
};