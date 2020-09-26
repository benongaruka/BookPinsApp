var passport = require('passport');
var mongoose = require('mongoose');

var User = mongoose.model('User');

var sendJSONResponse = function(res, status, content){
    res.status(status);
    res.json(content);
}
module.exports.register = function(req, res){

    if (!req.body.name || !req.body.email || !req.body.password){
        sendJSONResponse(res, 400, {
            "message": "all fields required"
        });
        return;
    }

    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);
    
    user.save((err) => {
        if(err){
            res.status(500);
            res.json(err);
            return;
        }
        let token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        }) 
    })
}

module.exports.login = function(req, res){
    if (!req.body.email || !req.body.password){
        sendJSONResponse(res, 400, {
            "message" : "All fields required"
        })
    }
    passport.authenticate('local', function(err, user, info){
        if (err) {
            res.status(400).json(err);
        }

        if (user) {
            let token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        }
        else {
            res.status(401).json(info);
        }
    });
}