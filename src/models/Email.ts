import { Schema, model, Document } from 'mongoose';
interface IEmail extends Document {
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

export const GetEmail = (discordId: string): Promise<IEmail> => {
    return exports.findOne({ discordId }).exec() as Promise<IEmail>;
};
