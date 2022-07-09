import { Schema, model } from 'mongoose';

export default model(
    'testemail',
    new Schema({
        discordId: { type: String, required: true },
        email: { type: String, required: true },
    })
);
