import {Schema,model } from 'mongoose'

const userSchema = new Schema({
    userName:{
        type:String,
        required:[true,"please provide username"],
        unique:true,
        trim:true
    },
    passWord:{
        type:String,
        required:[true,"please provide password"]
    },
    email:{
        type:String,
        required:[true,"please provide  Email"],
        unique:true,
        lowercase:true
    },
    address:{
        type:String,
    },
    mobileNo:{
        type:String,
        required:[true,"please  provide  mobile Number"]
    },
  isAdmin:{
    type:String,
    default:false
  }
},{timestamps:true})

const User = model('User',userSchema)
export default User