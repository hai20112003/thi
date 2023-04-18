import joi from "joi";
// export const bookSchema = joi.object({
//     name: joi.string().required().min(6).max(255),
//     price: joi.string().required(),
//     description: joi.string(),
//     image: joi.string(),
// })

export const signupSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
    confirmPassword: joi.string().required().valid(joi.ref("password")),
})
export const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required().min(6),
})