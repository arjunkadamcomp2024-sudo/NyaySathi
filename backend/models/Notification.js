const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    type: { type: String, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    relatedCaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Case' },
    isRead: { type: Boolean, default: false },
    priority: { type: Number, default: 0 },
    actionUrl: { type: String },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports = mongoose.model('Notification', notificationSchema);