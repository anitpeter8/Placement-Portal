const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const statisticsSchema=new Schema({
    year:{
        type:String
    },
    offers:[
        {
            companyname:String,
            CSE:Number,
            AI:Number,
            MECH:Number,
            CIVIL:Number,
            EEE:Number,
            ECE:Number,
            LPA:Number,
        }
    ]

})
module.exports=mongoose.model('Statistics',statisticsSchema);