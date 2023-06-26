const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const statisticsSchema=new Schema(
    {
            companyname:String,
            year:Number,
            CSE:Number,
            AI:Number,
            MECH:Number,
            CIVIL:Number,
            EEE:Number,
            ECE:Number,
            LPA:String,
            total:Number


})
module.exports=mongoose.model('Statistics',statisticsSchema);