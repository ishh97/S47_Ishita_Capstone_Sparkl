import  mongoose   from "mongoose";
import { Schema } from "mongoose";

const watchListSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    type: String,
    coverImageURL: String,
    summary: String,
    wantTo: String,
    whereTo: {
        type: String,
        enum: ["Netflix", "Amazon Prime", "Hulu", "Disney+", "Other"],
        default: "Other"
    },
    fav: {
        type: Boolean,
        default: false
    }
});


const WatchListModal = mongoose.model("watchlists", watchListSchema);

export default WatchListModal    