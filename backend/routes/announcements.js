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