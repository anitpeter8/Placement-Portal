const express=require('express')
const routes=express.Router();
const Students=require('../models/studentmodel');

routes.get('/',async(req,res)=>{
    try {
        const students=await Students.find({});
        res.json(students);
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }

})

routes.get('/:emailid',async(req,res)=>{
    const {emailid}=req.params;
    try {
        const student=await Students.findOne({emailid});
        res.json(student);  
    } catch (error) {
        res.status(400).json(error.message);
    }
 
})

routes.post('/',async(req,res)=>{
  const obj={...req.body};
 
  try {
    const student=await Students.create({
    ...req.body
    });
    res.send(student);

  } catch (error) {
    res.status(400).json({error:error.message});
  }

})

module.exports=routes;