require('./config/db');
const express = require('express');
const bodyparser = require('body-parser');
const routes=require('./routes/userRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });
  


app.use('/',routes);





const port=process.env.PORT || 6000
app.listen(port,()=>{
    console.log("Server is running at http://localhost:"+port);
});