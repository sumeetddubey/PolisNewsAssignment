/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(app, db){
    var UserService = require('./services/user.service.server.js')(app, db);
    var NewsService = require('./services/news.service.server.js')(app);
};