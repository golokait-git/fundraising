import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()

const app = express();
app.use(express.json())
const PORT = process.env.PORT || 5000


//MongoDb connection

const mongoDb = ()=>{
    const connect = mongoose.connect(process.env.MONGODBURL)
    if(connect){
        console.log("mongodb connection")
    }
}



app.listen(PORT, ()=>{
    console.log(`port running on ${PORT} `)
    mongoDb()
})




