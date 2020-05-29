var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
    id: "",
    postalCode: "",
    publicPlace: "",
    number: "",
    complement: "",
    neighborhood: "",
    locality: "",
    state: "",
    active: ""
});

module.exports = mongoose.model('Address', AddressSchema);