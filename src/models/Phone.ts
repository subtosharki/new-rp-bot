import { Schema, model } from 'mongoose';

interface IPhone {
    discordId: string;
    number: string;
    contacts: [{
        name: { type: String, required: true },
        number: { type: String, required: true },
    }]
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
