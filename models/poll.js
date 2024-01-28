import mongoose from 'mongoose'

const optionSchema = new mongoose.Schema({
    options:String,
    votes:{
        type:Number,
        default:0
    }
});

const pollSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    question:String,
    options:[{optionSchema}],
    voted:[{type:mongoose.Schema.Types.ObjectId, ref:"user"}],
},{
    timestamps:true
});


export default mongoose.model("poll",pollSchema)