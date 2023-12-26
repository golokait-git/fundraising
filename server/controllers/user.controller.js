import User from './../models/User.model.js'
const postapisignup = async (req, res) => {

    const { userName, passWord, email, address, mobileNo,isAdmin } = req.body

    const newUser = new User({
        userName, passWord, email, address, mobileNo,isAdmin

    })

    const user = await User.findOne({email:email})

    if (user) {
        return res.status(201).json({
            success: true,
               message:"you are already signup"

        })
    }

    try {
        const savedUser = await newUser.save()

        

        return res.status(201).json({
            success: true,
            data: savedUser,
            message: "user register successfully"

        })

    } catch (e) {
        return res.json({
            success: true,
            message: (e.message)
        })
    }
}


const postapilogin = async (req, res) => {

    const { email, passWord } = req.body

    if (!email || !passWord) {
        return res.json({
            success: false,
            message: "please provide email and password"
        })
    }

    const user = await User.findOne({
        email: email,
        passWord: passWord
    }).select("userName email mobileNo")

    if (user) {
        return res.status(201).json({
            success: true,
            data: user,
            message: "login successfully"

        })
    }
    else {
        return res.status(203).json({
            success: false,
            data: null,
            message: "Invalid credentials"
        })
    }

}

export {postapisignup,postapilogin }