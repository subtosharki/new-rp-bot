import { Schema, model, Document } from 'mongoose';
interface IVehicle extends Document {
    discordId: string;
    locked: boolean;
    engine: boolean;
}

export default model<IVehicle>(
    'vehicle',
    new Schema<IVehicle>({
        discordId: { type: String, required: true },
        locked: { type: Boolean, required: true },
        engine: { type: Boolean, required: true },
    })
);
