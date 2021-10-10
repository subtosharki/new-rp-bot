const mongoose = require('mongoose');

const NineOneOneSchema = new mongoose.Schema({
    GuildID: {
        type: mongoose.SchemaTypes.String,
        required: false,
        unique: true,
    },
});

module.exports = mongoose.model('911', NineOneOneSchema);
