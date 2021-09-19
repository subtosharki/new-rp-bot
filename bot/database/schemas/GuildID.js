const mongoose = require('mongoose');

const GuildIDSchema = new mongoose.Schema({
    GuildID: {
        type: mongoose.SchemaTypes.String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model('GuildID', GuildIDSchema);
