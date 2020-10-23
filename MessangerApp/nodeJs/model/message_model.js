var mongoose = require('mongoose');

var schema= mongoose.Schema({
        date:{type:Date,default:Date.now()},
        content:{type:String,require:true},
        userId:String,
        userName:String
});

module.exports = mongoose.model('messageModel',schema);