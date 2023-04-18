import User from './../models/auth';
import jwt  from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import { signinSchema, signupSchema } from '../schema/auth';

export const signup = async (req,res) =>{
    try {
        const {error} = signupSchema.validate(req.body, {abortEarly: false});
        if(error){
            return res.status(401).json({
                message: error.details[0].message
            })
        }
        const userExits = await User.findOne({email: req.body.email});
        if(userExits){
            return res.status(401).json({
                message: "Email đã tồn tại"
            })
        }
        const pass = bcrypt.hash(req.body.password, 10);

        const data = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: pass
        })
        const accessToken = await jwt.sign({_id:  data._id}, "baithi", {expiresIn: "1d"});
        return res.status(201).json({
            message: "Đăng ký tài khoản thành công",
            accessToken,
            data
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}
export const signin = async (req,res) =>{
    try {
        const {email, password} = req.body;
        const {error} = signinSchema.validate(req.body, {abortEarly: false});
        if(error){
            return res.status(401).json({
                message: error.details[0].message
            })
        }
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(401).json({
                message: "Bạn chưa đăng kí tài khoản"
            })
        }
        const pass = bcrypt.compare(password, user.password);
        if(!pass){
            return res.status(401).json({
                message: "Mật khẩu không đúng"
            })
        }
        const accessToken = await jwt.sign({_id:  data._id}, "baithi", {expiresIn: "1d"});
        return res.status(201).json({
            message: "Đăng ký tài khoản thành công",
            accessToken,
            user
        })
    } catch (error) {
        return res.status(401).json({
            message: error.message
        })
    }
}