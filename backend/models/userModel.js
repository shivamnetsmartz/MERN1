const mongoose = require('mongoose');

const bcrypt = require("bcrypt");


const validationSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Name should not be left blank"],
        minlength: [5, "Name must be atleast 5 characters long"],
      },
      lastName: {
        type: String,
        required: [true, "Name should not be left blank"],
      },
      password: {
        type: String,
        required: [true, "password should not left empty"],
        minlength: [4, "Password should be greater than 4"],
      },
      contact: {
        type: String,
        maxlength: [10, "contact must be atleast 10 number long"],
        minlength: [10, "contact must be atleast 10 number long"],
      },
      email: {
        type: String,
        unique: [true, "Email Already Exists"],
      },
     
    
      location: {
        type: String,
        required: [true, "location should not left empty"]
      },
      saltString: { type: String },
    });

    //methods for encrypting password

validationSchema.pre("save", function (next) {
    bcrypt.genSalt(15, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        (this.password = hash), (this.saltString = salt);
        next();
      });
    });
  });
  
  validationSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  mongoose.model("user", validationSchema);