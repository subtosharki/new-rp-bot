import { Schema, model, Document } from 'mongoose';

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
