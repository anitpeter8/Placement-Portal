const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const rolesSchema=new Schema({
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }});
module.exports=mongoose.model('Roles',rolesSchema);