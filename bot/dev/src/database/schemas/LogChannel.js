const mongoose = require('mongoose');

const LogChannelSchema = new mongoose.Schema({
    LogChannel: {
        type: mongoose.SchemaTypes.String,
        required: false,
        unique: true,
    },
});

module.exports = mongoose.model('LogChannel', LogChannelSchema);
