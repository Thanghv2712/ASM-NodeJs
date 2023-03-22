import Product from "../models/product";
import Joi from "joi";

const productSchema = Joi.object({
    name : Joi.string().required(),
    price : Joi.number().required(),
    description : Joi.string().required(),
    status : Joi.boolean().required(),
    quality : Joi.number().required()

});

 export const getAll = async(req , res)=>{
    try {
        
    const data = await Product.find();

    if(data.length == 0){
            return res.status(400).json({
                message : "không có sản phẩm"
            })
    }
    return res.status(200).json({
        data,
    })

    } catch (error) {
        return res.status(400).json({
            message : error,
        })
    }
 }

 export const create = async (req , res)=>{
    try {
             const {error} =   productSchema.validate( req.body)

             if(error) {
                return res.status(400).json({
                    message : error.details[0].error
                })

             }

        const product = await Product.create(req.body)
        return res.status(201).json({
            message : "tạo sản phẩm thành công",
            product,
        })
    } catch (error) {
        return res.status(400).json({
    message:error,

        })
    }
    

 }

 export const getOne = async(req , res)=>{
    try {
        const id = req.params.id ;

    const product = await Product.findById(id)

    if(product.length == 0){
            return res.status(400).json({
                message : "không có sản phẩm"
            })
    }
    return res.status(200).json({
        product,
    })

    } catch (error) {
        return res.status(400).json({
            message : error,
        })
    }
 }

 export const Update = async(req , res)=>{
    try {
        const id = req.params.id ;

    const product = await Product.findByIdAndUpdate(id , req.body , {new : true})

    return res.status(200).json({
        product,
    })

    } catch (error) {
        return res.status(400).json({
            message : error,
        })
    }
 }

 export const Remove = async(req , res)=>{
    try {
        const id = req.params.id ;

     await Product.findByIdAndDelete(id)

    return res.status(200).json({
        message : "xoá thành công"
    })

    } catch (error) {
        return res.status(400).json({
            message : error,
        })
    }
 }