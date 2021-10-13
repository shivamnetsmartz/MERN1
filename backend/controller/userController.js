require('../models/userModel');
require('../config/passportConfig');

const mongoose = require('mongoose');
const userData=mongoose.model('user');



//register
module.exports.addUser=(req,res)=>{
  var usData=new userData({
      firstName:req.body.firstName,
      lastName:req.body.lastName,
      password:req.body.password,
      contact:req.body.contact,
      email:req.body.email,
      location:req.body.location
     
  });

  usData.save().then((docs)=>{
      return res.status(200).json({
          success:true,
          message:'New Data recorded',
          data:docs
      })
  })
  .catch((err)=>{
      return res.status(401).json({
          success:false,
          message:'Error in adding data',
          error:err.message
      })
  })
}

