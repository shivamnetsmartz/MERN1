var express = require('express');

var myctrl = require('../controller/userController');

var approute=express.Router();


//register

approute.post('/userData',myctrl.addUser);


module.exports = approute;