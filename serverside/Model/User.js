const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the user schema
const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fullName: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    country: { type: String },
    dateJoined: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    planId: { type: String },
    planName: { type: String },
    planCost: { type: Number },
    paymentStatus: { type: String, enum: ['Paid', 'Unpaid'], default: 'Unpaid' },
    paymentDate: { type: Date },
    referralLink: { type: String },
    referrerId: { type: Schema.Types.ObjectId, ref: 'User' }, // Assuming referrer is also a user
    downlineMembers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    transactionPin: { type: String, required: true } // Transaction Pin is required
}, {timestamps: true});

// Create a model based on the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
