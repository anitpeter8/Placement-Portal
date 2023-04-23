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



module.exports=routes;