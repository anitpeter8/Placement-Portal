const express=require('express')
const routes=express.Router();
const Announcements=require('../models/announcementmodel')
routes.get('/',async (req,res)=>
{   try{
    const announcementss=await Announcements.find({})
    res.json(announcementss);
}
catch(error)
{
    res.json({
        error:error.message
    })
}
})

routes.delete('/:id',async(req,res)=>{
   const {id}=req.params;
   try {
    const announcement=await Announcements.findOneAndDelete({_id:id})
    res.json(announcement);
 }
    catch (error) {
    res.status(400).json({error:error.message});
   }
}
)

routes.patch('/:id',async(req,res)=>{
    const {id}=req.params;
    const announcement=await Announcements.findOneAndUpdate({_id:id},{
        ...req.body

    })
    const updatedannouncement=await Announcements.findOne({_id:id})
    res.status(200).json(updatedannouncement)
})
routes.post('/',async (req,res)=>{
const {heading,description}=req.body;
try{
const announcement=await Announcements.create({
    heading:heading,
    description:description
})
console.log(announcement);
res.json(announcement);
}
catch(error)
{
    res.json({error:error.message})
}
})

module.exports=routes;