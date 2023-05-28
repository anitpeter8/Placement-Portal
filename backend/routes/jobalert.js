const express=require('express')
const Jobs=require('../models/jobalertmodel');
const routes=express.Router();

routes.get('/',async(req,res)=>{
    try {
        const jobs=await Jobs.find({});
    res.json(jobs);
    } catch (error) {
        res.json({error:error.message});
    }
    
})
routes.post('/',async(req,res)=>{
    const {heading,role,description,noofbacklogs,cgpa,history,branch}=req.body;
    try {
        const job=await Jobs.create({
            heading:heading,role:role,description:description,noofbacklogs:noofbacklogs,cgpa:cgpa,history:history,branch:branch
        })
        res.json(job);
    } catch (error) {
        res.json({error:error.message});
    }
    
})


routes.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try {
     const job=await Jobs.findOneAndDelete({_id:id})
     res.json(job);
  }
     catch (error) {
     res.status(400).json({error:error.message});
    }
 }
 )
 
 routes.patch('/addstudent/:id',async(req,res)=>{
 const {id}=req.params;
 try {
    const job=await Jobs.findByIdAndUpdate({_id:id},{
        $set:{applied_students:{...req.body}}
     });
     const updatedjob=await Jobs.findByIdAndUpdate({_id:id});
     res.json(updatedjob);
    
 } catch (error) {
    res.status(400).json({error:error.message});
 }

 })



 routes.patch('/:id',async(req,res)=>{
     const {id}=req.params;
     const job=await Jobs.findOneAndUpdate({_id:id},{
         ...req.body
 
     })
     const updatedjob=await Jobs.findOne({_id:id})
     res.status(200).json(updatedjob)
 })

module.exports=routes;