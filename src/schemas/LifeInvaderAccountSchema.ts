import { Schema } from 'mongoose';

export default new Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        required: false,
    },
    pfp: {
        type: String,
        required: false,
    },
});
