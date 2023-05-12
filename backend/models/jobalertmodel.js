const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const jobSchema=new Schema({
    applylink:{
        type:String
    },
    
    heading:{
        type:String
    },
    role:{
        type:String
    },
    description:{
        type:String
    },
    noofbacklogs:{
        type:Number
    },
    cgpa:{
        type:Number
    },
    history:{
       type:Boolean
    }
    ,
    branch:[
        {type:String}
    ]
},{
    timestamps:true
})

module.exports=mongoose.model('Jobs',jobSchema);