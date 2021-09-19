const mongoose = require('mongoose');

const GuildIDSchema = new mongoose.Schema({
    GuildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
    LogChannel: {
        type: mongoose.SchemaTypes.String,
        required: false,
        unique: true,
    },
});

module.exports = mongoose.model('GuildID', GuildIDSchema);
