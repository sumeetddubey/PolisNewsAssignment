/**
 * Created by sumeetdubey on 4/4/18.
 */
module.exports = function(app, db){
    var UserModel = require('./models/user.model.server.js')(db);
    var UserService = require('./services/user.service.server.js')(app, UserModel);
};