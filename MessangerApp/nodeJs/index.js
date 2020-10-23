const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const Messageroutes = require('../nodeJs/routes/message_routes');
const UserRoutes = require('../nodeJs/routes/user_routes');

const app= express();


mongoose.connect('mongodb://localhost:27017/myproject1', { useNewUrlParser: true, useUnifiedTopology: true ,useMongoClient:true});

mongoose.connection.on('connected',function(){
    console.log("mongoDb connected")
});

mongoose.connection.on('error',function(err){
    if(err)
    console.log("error Connection",err)
});


app.use(bodyParser.json());

app.use(cors());

app.use('/message',Messageroutes);
app.use('/user',UserRoutes);



app.listen(3000,function(){
    console.log("listening at 3000")
});