const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const OtpSchema=Schema({
    emailid:String,
    otp:String,
    createdAt:Date,
    expiresAt:Date
});

module.exports=mongoose.model('Otp',OtpSchema);