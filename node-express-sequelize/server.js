var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});


app.get('/users',function(req,res,cb){
User.find(User,function(err,username){
if(err,null){

	console.log(err)
	cb()
}

else if(null,username){

res.send(req.body.username)
cb()
}

})
})




/*  Create a '/users' route that responds to 
    a GET request with all users in the database */



module.exports = { 
  app: app,
  User: User
};
