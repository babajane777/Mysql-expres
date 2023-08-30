const sqldb = require('../config/dbConfig');

var Users = function(user){
    this.id = user.id;
    this.name = user.name;
    this.emailId = user.emailId;
}

Users.create = function(newUser, result ){
    sqldb.query("INSERT INTO users set ?", newUser , function(err, res){
        if(err){
            console.log("err:", err);
            result(err , null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }

    });
};

Users.findById = function(id, result){
    sqldb.query("Select * from Users where id= ?", id , function(err , res){
        if(err){
            console.log(err);
            result(err, null);
        }
        else{
            console.log(res);
            result(null , res);
        }

    });
};

Users.findAll = function(result){
    sqldb.query("Select * from Users", function(err, res){
        if(err){
            console.log(err);
            result(err , null);
        }
        else{
            console.log(res);
            result(null , res);
        }
    });
};

module.exports = Users;