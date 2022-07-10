import { Schema, model } from 'mongoose';

interface ITwitter {
    discordId: string;
    username: string;
    pfp?: string;
    verifiedServers: [string];
}

export default model<ITwitter>(
    'twitterUsers',
    new Schema<ITwitter>({
        discordId: { type: String, required: true },
        username: { type: String, required: false },
        pfp: { type: String, required: false },
        verifiedServers: [String],
    })
);
