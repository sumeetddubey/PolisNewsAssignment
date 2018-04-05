/**
 * Created by sumeetdubey on 4/4/18.
 */
var request = require('request');
module.exports = function(app){
    app.get('/api/news/sources', getSources);

    function getSources(req, res){
        var options = {
            method: 'GET',
            url: 'https://newsapi.org/v2/sources',
            headers: {
                'Authorization': '5311686059434bcface7a4dd32310b06'
            }
        };
        request(options, function(err, response, body){
            if(err){
                res.send(err);
            }
            else{
                res.status(200).send(body);
            }
        })
    }
};