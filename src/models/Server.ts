import { Schema, model } from 'mongoose';

interface IServer {
    serverId: string;
    managerRoleId: string;
}

export default model<IServer>(
    'servers',
    new Schema<IServer>({
        serverId: { type: String, required: true },
        managerRoleId: { type: String, required: true },
    })
);
