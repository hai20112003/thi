import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const authSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "member"],
        default: "member"
    }
})

export default mongoose.model("User", authSchema);