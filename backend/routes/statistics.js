const express=require('express');
const Statistics = require('../models/statistics');
const routes=express.Router();

routes.post('/',async(req,res)=>{
    try {
        const stat=await Statistics.create({...req.body})
        res.json(stat)
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
})
routes.put('/delete/:yearid/:offerid',async(req,res)=>{
    const yearid=req.params.yearid;
    const offerid=req.params.offerid;
    console.log(yearid,offerid);
    try{
      const stat= await Statistics.findByIdAndUpdate({_id:yearid},
        {
            $pull:{offers:{_id:offerid}}
        })
        //res.json({mssg:"done"});
        res.json(stat);
        //console.log(stat);
    }
    

    catch(error)
    {
        res.status(400).json({error:error.message});
    }
})

routes.put('/edit/:yearid/:offerid',async(req,res)=>{
    const yearid=req.params.yearid;
    const offerid=req.params.offerid;
    console.log(yearid,offerid);
    try{
      const stat= await Statistics.findByIdAndUpdate({_id:yearid},
        {
            $set:{offers:{_id:offerid,...req.body}}
        })
        //res.json({mssg:"done"});
        res.json(stat);
        //console.log(stat);
    }
    

    catch(error)
    {
        res.status(400).json({error:error.message});
    }
})



routes.put('/add/:yearid',async(req,res)=>{
    const yearid=req.params.yearid;
    const offerid=req.params.offerid;
    console.log(yearid);
    try{
      const stat= await Statistics.findByIdAndUpdate({_id:yearid},
        {
            $push:{offers:req.body}
        })
        //res.json({mssg:"done"});
        res.json(stat);
        //console.log(stat);
    }
    

    catch(error)
    {
        res.status(400).json({error:error.message});
    }
})

routes.get('/',async(req,res)=>{
    try{
        const all=await Statistics.find({});
        res.json(all)
    }
    catch (error) {
        res.status(400).json({error:error.message});
    }
})


module.exports=routes;
