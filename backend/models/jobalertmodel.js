const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const jobSchema=new Schema({
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