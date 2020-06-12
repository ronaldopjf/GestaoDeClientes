const mongoose = require('../../databse/index');

const occupationSchema = new mongoose.Schema({
    name: { type: String, require: true },
    active: { type: Boolean, require: true, default: true },
    createdAt: { type: Date, default: Date.now }
});

occupationSchema.method('transform', function () {
    var obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;

    return obj;
});

const Occupation = mongoose.model('Occupation', occupationSchema);

module.exports = Occupation;