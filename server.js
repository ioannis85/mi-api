'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const customerRoutes = require('./routes/customer-routes');

//registro de middlewares para body parsers.
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.json({message:'hello world!! from the API :)'});
});

//configuración de los routes;
customerRoutes(app);

mongoose.connect('mongodb://localhost/mi-api',()=>{
  console.log('connnected with mongodb :)');
});

app.listen(3012,()=>{
  console.log('application up!!!');
});
