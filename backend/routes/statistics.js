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
