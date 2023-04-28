var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '20cs249@mgits.ac.in',
    pass: 'annmariaismybfff2008'
  }
});

const express=require('express');
const Otp = require('../models/Otp');
const OtpRoutes=express.Router();
OtpRoutes.post('/',async(req,res)=>{
    const {emailid}=req.body;
    const otp=Math.floor(1000+ Math.random()*9000);
    const verifier= await Otp.create({emailid,otp})
    var mailOptions = {
        from: 'mits@placementmgits.ac.in',
        to: `${emailid}`,
        subject: 'OTP verification',
        html: `<h4>OTP verification for Mits Placement portal</h4><p>Your otp for registration is <b><hr>${otp}<hr></b>confirm it for further registration</p>`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    res.json({emailid,otp})

})
OtpRoutes.get('/',async(req,res)=>{
    const verifiers=await Otp.find({});
    res.json(verifiers);
})

module.exports=OtpRoutes;