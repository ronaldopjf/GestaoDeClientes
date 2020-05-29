var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccupationSchema = new Schema({
    id: "",
    name: "",
    active: ""
});

module.exports = mongoose.model('Occupation', OccupationSchema);