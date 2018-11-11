const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Customer', customerSchema);