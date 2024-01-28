import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    polls:[{type: mongoose.Schema.Types.ObjectId, ref:"poll"}]
},{
    timestamps:true
})


export default mongoose.model("user",userSchema)