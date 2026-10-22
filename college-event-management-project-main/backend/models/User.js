const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['student', 'organizer', 'admin'], 
    default: 'student' 
  },
  interests: [{ type: String }],
  department: { type: String },
  isVerified: { type: Boolean, default: false },
  refreshToken: { type: String },
  loginAttempts: { type: Number, default: 0, required: true },
  lockUntil: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

// Helper for account locking logic
userSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

module.exports = mongoose.model('User', userSchema);
