import { Schema, model } from 'mongoose';

export default model(
    'testprofile',
    new Schema({
        discordId: { type: String, required: true },
        username: { type: String, required: false },
        pfp: { type: String, required: false },
    })
);
