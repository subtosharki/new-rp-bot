const mongoose = require('mongoose');

module.exports = { connect };
function connect() {
    mongoose.connect(
        'mongodb+srv://sharki:sharki123@cluster0.ppigb.mongodb.net/test'
    );
}
