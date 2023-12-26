import Donar from './../models/Donar.model.js'


const postDonarApi = async(req,res)=>{
    const{ firstName,lastName,email,country,contactNo,donateAmount,paymentMethod}=req.body;

    const donateUser= new Donar({

        firstName,lastName,email,country,contactNo,donateAmount,paymentMethod

    })

    try{

        const savedUser = await donateUser.save()

       return res.status(201).json({
            success: true,
            data: savedUser,
            message: "Thank you for donating"
        })

    }catch(e){
        return res.json({
            success: false,
            message: (e.message)
        })

    }
}


const getApiDonars = async(req,res)=>{
   const getAllDonars = await Donar.find();

   return res.status(200).json({
            success: true,
            data: getAllDonars,
            message: "successfully fetch data"


   })
}

export { postDonarApi,getApiDonars }