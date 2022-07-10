import { Schema, model, Document } from 'mongoose';
import Phone from './Phone';

interface IPhone extends Document {
    discordId: string;
    number: string;
    contacts: [
        {
            name: { type: String; required: true };
            number: { type: String; required: true };
        }
    ];
}

export default model<IPhone>(
    'phoneUsers',
    new Schema<IPhone>({
        discordId: { type: String, required: true },
        number: { type: String, required: true },
        contacts: [
            {
                name: { type: String, required: true },
                number: { type: String, required: true },
            },
        ],
    })
);

export const GetPhone = (discordId: string): Promise<IPhone> => {
    return Phone.findOne({ discordId }).exec() as Promise<IPhone>;
};
