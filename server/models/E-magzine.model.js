import {Schema,model} from "mongoose";

const emagzineSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    contactNo:{
        type:String,
        required:true
    }

},{timestamps:true})

const Emagzine = model('Emagzine',emagzineSchema)

export default Emagzine