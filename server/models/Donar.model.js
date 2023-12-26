import {Schema,model } from 'mongoose'

const donarSchema = new Schema({
    firstName:{
        type:String,
        required:[true,"please provide firstname"],
    },
    lastName:{
        type:String,
        required:[true,"please provide password"]
    },
    email:{
        type:String,
        required:[true,"please provide  Email"],
      
    },
    country:{
        type:String,
    },
    contactNo:{
        type:String,
        required:[true,"please provide contact Number"]
    },
    donateAmount:{
        type:Number,
        required:true,
        min: [500, 'minimun 500 only'],

    },
    paymentMethod:{
        type:String,
        enum:["credit card", "digital wallets", "debit card",  "UPI", "Internet Banking" ]
    }

},{timestamps:true})

const Donar = model('Donar',donarSchema)
export default Donar