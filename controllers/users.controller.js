const User = require('../models/users.model');



exports.create = function (req, res) {
    var newUser = new User(req.body);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    }else{
        User.create(newUser , function(err, user){
            if(err){
                res.send(err);
            }
            res.json({error:false , message: "new user created", data:user});
        })
    }
}

exports.findById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err)
      return res.send(err);
      res.json(user);
    });
};

exports.findAll = function (req, res) {
    User.findAll(function (err, data) {
        if (err) {
            res.send(err)
        }
        res.send(data)
    })
}