const mongoose = require('../../databse/index');

const AddressSchema = new mongoose.Schema({
    postalCode: { type: String, require: true },
    publicPlace: { type: String, require: true },
    number: { type: Number, require: true },
    complement: { type: String, require: false },
    neighborhood: { type: String, require: true },
    locality: { type: String, require: true },
    state: { type: String, require: true },
    active: { type: Boolean, require: true, default: true },
    createdAt: { type: Date, default: Date.now }
});

const Address = mongoose.model('Address', AddressSchema);

module.exports = Address;