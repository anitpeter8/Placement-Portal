const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const announcementSchema=new Schema(
    {
        heading:{
            type:String
        },
        description:{
            type:String
        }
    },
    {
        timestamps:true
    }
)
module.exports=mongoose.model('Announcements',announcementSchema)
