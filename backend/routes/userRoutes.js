var express = require('express');

var myctrl = require('../controller/userController');

var approute=express.Router();


//register

approute.post('/user',myctrl.addUser);


module.exports = approute;