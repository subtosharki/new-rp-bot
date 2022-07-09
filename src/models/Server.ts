import { Schema, model } from 'mongoose';

export default model(
    'testserver',
    new Schema({
        serverId: { type: String, required: true },
        managerRoleId: { type: String, required: true },
    })
);
