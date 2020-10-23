var mongoose = require('mongoose');
var validator = require('mongoose-unique-validator')
var schema = mongoose.Schema({
        UserName:{type:String,require:true},
        email:{type:String,require:true, unique:true},
        password:{type:String,require:true},
        role:{type:String,require:true}
});

schema.plugin(validator);

module.exports = mongoose.model('usermodel',schema);