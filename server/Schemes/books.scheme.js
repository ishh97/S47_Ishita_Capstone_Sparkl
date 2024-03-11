import  mongoose   from "mongoose";
import { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: String,
    coverImageURL: String,
    genre:Array,
    wantTo: {
        type: String,
        enum: ["wantToRead", "currentlyReading", "read", "none"],
        default: "none"
    },
    fav: {
        type: Boolean,
        default: false
    }
});

const BookModal = mongoose.model("books", bookSchema);

export default BookModal    