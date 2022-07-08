import { Schema, model } from 'mongoose';

export default model(
    'testphone',
    new Schema({
        discordId: { type: String, required: true },
        number: { type: String, required: true },
    })
);
