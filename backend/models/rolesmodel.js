const mongoose =require('mongoose');
const Schema=mongoose.Schema;
const rolesSchema=new Schema({
    emailid:{
        type:String
    },
    password:{
        type:String
    },
    role:{
        type:String
    }});
rolesSchema.statics.Login=async function (email,password) {
    if(!email && !password){
        throw Error('Fill all fields');
    }
    else {
        const user=await this.findOne({emailid:email});
        console.log(email);
        if(!user){
            throw Error('User doesnt Exist');
        }
        if(user.password==password){
            console.log('password mathces');
            console.log(user);
            return user;
            
        }
        else{
            throw Error('Wrong Password');
        }
    }
    
}
module.exports=mongoose.model('Roles',rolesSchema);
