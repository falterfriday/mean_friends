var mongoose = require('mongoose');
var User = mongoose.model('User');

function FriendsController(){
  this.index = function(req,res){
    User.find( {} , function(err, users){
      if(err){
        console.log('User not found');
      }
      else {
        res.json(users);
      }
    });
  };

  this.create = function(req,res){
    var user = User({first_name:req.body.first_name, last_name:req.body.last_name, birthdate: req.body.birthdate});
    user.save(function(err){
      if(err){
        console.log('New user could not be added');
      }
      else {
        res.json(user);
      }
    });
  };

  this.update = function(req,res){
    User.findOne({_id:req.params.id}, function(err, user){
      if(err){
        console.log("Could not update user - 1");
      }
      else {
        user.first_name = req.body.first_name;
        user.last_name = req.body.last_name;
        user.birthdate = req.body.birthdate;
        user.save(function(err){
          if(err){
            console.log('Could not update user - 2');
          }
          else {
            res.json(user);
          }
        });
      }
    });
  };
  this.edit = function(req,res){
  	User.findOne({_id: req.params.id}, function(err,user){
  		if(err){
  			console.log('The edit failed');
  		}
  		else{
  			res.json(user);
  		}
  	});
  };

  this.delete = function(req,res){
    User.remove({_id:req.params.id}, function(err){
      if(err){
        console.log('Could not remove user');
      }
      else {
        User.find({}, function(err, users){
          if(err){
            console.log('coudnt retrieve after delete');
          }
          else {
            res.json(users);
          }
        });
      }
    });
  };

  this.show = function(req,res){
    User.findOne({_id:req.params.id}, function(err, user){
      if(err){
        console.log('Could not retrieve user');
      }
      else {
        res.json(user);
      }
    });
  };
}

module.exports = new FriendsController(); // what does this export?
