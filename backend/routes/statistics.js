const express=require('express');
const Statistics = require('../models/statistics');
const routes=express.Router();

//new offer
routes.post('/',async(req,res)=>{
    try {
        const stat=await Statistics.create({...req.body})
        res.json(stat)
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
})

//update existing offer
routes.put('/update/:offerid',async(req,res)=>{
    
    const offerid=req.params.offerid;
    console.log(offerid);
    try{
      const stat=await Statistics.findByIdAndUpdate({_id:offerid},
        {
            ...req.body
        }
      )
        const updatedstat=await Statistics.findById({_id:offerid})
        res.json(updatedstat);
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
})

//get all offers
routes.get('/',async(req,res)=>{
    try{
        const all=await Statistics.find({});
        res.json(all)
    }
    catch (error) {
        res.status(400).json({error:error.message});
    }
})

//delete an existing offer
routes.delete('/delete/:offerid',async(req,res)=>{
    try {
        const _id=req.params.offerid;
        await Statistics.findByIdAndDelete({_id});
    } catch (error) {
        
        res.status(400).json({error:error.message});
    }
 
})

module.exports=routes;
