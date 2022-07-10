import { Schema, model, Document } from 'mongoose';
import Gas from './Gas';

interface IGas extends Document {
    discordId: string;
    gasLevel: number;
}

export default model<IGas>(
    'gas',
    new Schema<IGas>({
        discordId: { type: String, required: true },
        gasLevel: { type: Number, required: true },
    })
);

export const GetGas = (discordId: string): Promise<IGas> => {
    return Gas.findOne({ discordId }).exec() as Promise<IGas>;
};
