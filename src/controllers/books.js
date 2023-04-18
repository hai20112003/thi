import { bookSchema } from "../schema/books"
import Books from "../models/books";
export const create = async(req,res) =>{
    try {
        const {error} = bookSchema.validate(req.body, {abortEarly: false});
        if(error){
            return res.status(401).json({
                message: error.details[0].message
            })
        }
        const data = Books.create(req.body);
        if(data){
            return res.status(401).json({
                message: "Thêm book thất bại"
            })
        }
        return res.status(201).json({
            message: "Thêm sản phẩm thành công",
            data
        })
    } catch (error) {
        return res.status(401).json({
                message: error.message
            })
    }
}
export const getAll = async(req,res) =>{
    const {_sort = "createAt", _page = 1, _limit = 20, _oder ="asc"}= req.query;
    const options = Ơ
    try {
        
    } catch (error) {
        
    }
}
export const get = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}
export const remove = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}
export const update = async(req,res) =>{
    try {
        
    } catch (error) {
        
    }
}