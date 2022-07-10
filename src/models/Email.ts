import { Schema, model } from 'mongoose';

interface IEmail {
    discordId: string;
    email: string;
}

export default model<IEmail>(
    'email',
    new Schema<IEmail>({
        discordId: { type: String, required: true },
        email: { type: String, required: true },
    })
);
