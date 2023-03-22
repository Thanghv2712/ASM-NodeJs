// import { boolean, string } from "joi";
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name:{
        type : String ,
        require : true
    },
    price: Number ,
    description : String , 
    status : Boolean ,
    quality : Number,

})

export default mongoose.model("Product" , productSchema);