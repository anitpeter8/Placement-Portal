const jwt = require("jsonwebtoken");

const tokenauth=(req,res,next)=>{
    const {authorization}=req.headers;
    if(!authorization)
    {
        return res.status(400).json({error:'no authtoken attached'})
    }
    const token=authorization.split(' ')[1];
    try {
       
        const {_id}=jwt.verify(token,'STARFLEETENTERPRISE@11shibadi');

    } catch (error) {
        return res.status(400).json({error:error.message,token})
    }
    next();
}
module.exports={tokenauth};