var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    id: "",
    name: "",
    socialSecurityNumber: "",
    dateOfBirth: "",
    sex: "",
    email: "",
    password: "",
    address: {
        id: "",
        postalCode: "",
        publicPlace: "",
        number: "",
        complement: "",
        neighborhood: "",
        locality: "",
        state: "",
        active: ""
    },
    occupation: {
        id: "",
        name: "",
        active: ""
    },
    active: ""
});

module.exports = mongoose.model('Client', ClientSchema);