/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(app){
    app.get('/api/news/sources', getSources);
    app.get('/api/news/articles/:sourceId', getTopArticlesBySource);

    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI('5311686059434bcface7a4dd32310b06');

    function getSources(req, res){
        newsapi.v2.sources()
            .then(function(response){
                res.send(response);
            },
            function(err){
                res.status(400).send(err);
            })
    }

    function getTopArticlesBySource(req, res){
        newsapi.v2.topHeadlines({
            sources: req.params.sourceId
        })
            .then(
                function(response){
                    res.send(response);
                },
                function(err){
                    res.status(400).send(err);
                }
            )
    }
};