const mongoose = require('mongoose');
const consola = require('consola');

module.exports = { connect };
function connect() {
    mongoose.connect(
        'mongodb+srv://sharki:sharki123@cluster0.ppigb.mongodb.net/test'
    );
    consola.success('Database Loaded!');
}
