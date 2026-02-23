const mongoose = require('mongoose');

const legalGuideSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    keyPoints: {
        type: [String],
        required: true
    },
    relatedCases: {
        type: [String],
        required: false
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    views: {
        type: Number,
        default: 0
    },
    helpfulVotes: {
        type: Number,
        default: 0
    },
    notHelpfulVotes: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    timestamps: { 
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
});

module.exports = mongoose.model('LegalGuide', legalGuideSchema);