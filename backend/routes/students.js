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

routes.patch('/addjob/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const student=await Students.findByIdAndUpdate({_id:id},{
            $push:{applied_jobs:{...req.body}}
        });

        const updatedstudent=await Students.findByIdAndUpdate({_id:id});
        res.json(updatedstudent);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
})

//paste
routes.put('/deletejob/:id/:jobid',async(req,res)=>{
    const id=req.params.id;
    const jobid=req.params.jobid;
    try{
      const job= await Students.findOneAndUpdate({_id:id},
        {
            $pull:{applied_jobs:{database_id:jobid}}
        });
       const updatedjob=await Students.findById({_id:id});
       res.json(updatedjob);
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
})

module.exports=routes;