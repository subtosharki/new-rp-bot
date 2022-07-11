import { Schema, model, Document } from 'mongoose';
interface IServer extends Document {
    serverId: string;
    managerRoleId: string;
    verifiedUsers: string[];
}

export default model<IServer>(
    'servers',
    new Schema<IServer>({
        serverId: { type: String, required: true },
        managerRoleId: { type: String, required: true },
        verifiedUsers: { type: [String], required: true },
    })
);
