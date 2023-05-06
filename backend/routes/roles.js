const express=require('express')
const routes=express.Router();
const Roles=require('../models/rolesmodel');

routes.get('/',async(req,res)=>{
    try {
        const roles=await Roles.find({});
        res.json(roles);
    } catch (error) {
        res.status(400).json({
            error:error.message
    })

}})

routes.post('/',async(req,res)=>{
    const obj={...req.body};
    console.log(obj);
    console.log(req.body);
   
    try {
      const role=await Roles.create({
      ...req.body
      });
      res.send(role);
  
    } catch (error) {
      res.status(400).json({error:error.message});
    }
  
  })
routes.post('/login',async(req,res)=>{
    try {
        const user=await 
        Roles.Login(req.body.email,req.body.password);
        console.log(user);
        res.status(200).json(user)
        
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
})
  
  module.exports=routes;