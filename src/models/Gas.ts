import { Schema, model } from 'mongoose';

interface IGas {
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
