const express=require('express');
var cors = require('cors')
const app=express();
const announcementRoutes=require('./routes/announcements')
const jobroutes=require('./routes/jobalert');
const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://121miniproject:8I6QiQo3efbSgFsq@cluster0.eumy0d8.mongodb.net/test').then(
    ()=>{
        app.listen(5000,()=>{
            console.log("listening to 5000")
    }
)

}).catch((error)=>{
    console.log(error)
})
app.use(cors())
app.use(express.json())
app.use('/api/announcements',announcementRoutes)
app.use('/api/jobs',jobroutes)
