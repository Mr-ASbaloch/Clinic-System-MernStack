const mongoose =require ('mongoose')

const userschema=mongoose.Schema({
    name:{
        type:String,
        require:[true, 'name is required']
    },
    email:{
        type:String,
        require:[true, 'email is required']
    },
    password:{
        type:String,
        require:[true, 'password is required']
    }
})

const userModel=('users', userschema)

module.exports=userModel;