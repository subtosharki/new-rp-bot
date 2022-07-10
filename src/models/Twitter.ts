import { Schema, model, Document } from 'mongoose';
import Twitter from './Twitter';

interface ITwitter extends Document {
    discordId: string;
    username: string;
    pfp?: string;
}

export default model<ITwitter>(
    'twitterUsers',
    new Schema<ITwitter>({
        discordId: { type: String, required: true },
        username: { type: String, required: false },
        pfp: { type: String, required: false },
    })
);

export const GetTwitter = (discordId: string): Promise<ITwitter> => {
    return Twitter.findOne({ discordId }).exec() as Promise<ITwitter>;
};
