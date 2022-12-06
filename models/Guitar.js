import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: 'ObjectId',
        ref: 'User'
    },
    model: {
        type: String,
        required: true  
    },
    brand: {
        type: String,
        required: true
    },
    finish: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Guitar = mongoose.model('guitar', PostSchema);

export default Guitar; 