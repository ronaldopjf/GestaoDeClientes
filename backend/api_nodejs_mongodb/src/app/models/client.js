const mongoose = require('../../databse/index');
const bcrypt = require('bcryptjs');

const ClientSchema = new mongoose.Schema({
    name: { type: String, require: true },
    socialSecurityNumber: { type: String, require: true },
    dateOfBirth: { type: Date, require: true },
    sex: { type: String, require: true },
    email: { type: String, unique: true, require: true, lowercase: true },
    password: { type: String, require: true, select: false },
    passwordResetToken: { type: String, select: false },
    passwordResetExpires: { type: Date, select: false },
    occupationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Occupation', require: true },
    addressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', require: true },
    active: { type: Boolean, require: true, default: true },
    createdAt: { type: Date, default: Date.now }
});

ClientSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
})

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;