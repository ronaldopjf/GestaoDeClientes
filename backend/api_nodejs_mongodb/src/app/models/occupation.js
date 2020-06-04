const mongoose = require('../../databse/index');

const OccupationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    active: { type: Boolean, require: true, default: true },
    createdAt: { type: Date, default: Date.now }
});

const Occupation = mongoose.model('Occupation', OccupationSchema);

module.exports = Occupation;