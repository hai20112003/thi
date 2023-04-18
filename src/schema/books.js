import joi from "joi"
export const bookSchema = joi.object({
    name: joi.string().min(6).max(255).required(),
    price: joi.number().required(),
    description: joi.string(),
    image: joi.string(),
})