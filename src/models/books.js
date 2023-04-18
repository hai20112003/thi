import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const bookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    }
})
bookSchema.plugin(mongoosePaginate);
export default mongoose.model("Books", bookSchema);