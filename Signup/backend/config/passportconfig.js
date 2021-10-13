var passport=require('passport');
var localpassport=require('passport-local').Strategy;

require('../models/userModel');

const mongoose = require('mongoose');
var UserModel = mongoose.model('user');

passport.use(new localpassport({usernameField:'email'},
(username,password,done)=>{
    UserModel.findOne({email:username},
        (err,user)=>{
            if(err)
            return done(err);
            else if(!user)
            return done(null,false,{message:'email is not registered'})
            else if(!user.verifyPassword(password))
            return done(null,false,{message:'Password does not match',result:user.verifyPassword(password)});
            else
            return done(null,user);
        })
}))