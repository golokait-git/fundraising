import Emagzine from './../models/E-magzine.model.js'
const postApiEmagzine = async(req,res)=>{
    
    const {name,email,contactNo}=req.body

    const  EmagzineSub  = new Emagzine({

        name,email,contactNo

    })

    try{

        const subScribedUser = await EmagzineSub.save()

        return res.json({
            success:true,
             data:subScribedUser,
             message:"Thank you for subscribtion"

        })

    }catch(e){
        return res.json({
            message:e.message
        })
    }
}

export {postApiEmagzine}