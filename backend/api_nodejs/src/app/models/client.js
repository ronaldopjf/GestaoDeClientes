const mongoose = require('../../databse/index');
const bcrypt = require('bcryptjs');

const clientSchema = new mongoose.Schema({
    name: { type: String, require: true },
    socialSecurityNumber: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
    sex: { type: String, require: true },
    email: { type: String, unique: true, require: true, lowercase: true },
    password: { type: String, require: true, select: true },
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },
    occupation: { type: mongoose.Schema.Types.ObjectId, ref: 'Occupation', require: true },
    address: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', require: true },
    active: { type: Boolean, require: true, default: true },
    createdAt: { type: Date, default: Date.now }
});

clientSchema.method('transform', function () {
    var obj = this.toObject();

    obj.id = obj._id;
    delete obj._id;
    obj.occupation.id = obj.occupation._id;
    delete obj.occupation._id;

    return obj;
});

clientSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;