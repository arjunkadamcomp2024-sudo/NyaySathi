const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
    caseNumber: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    lawyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lawyer',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    caseType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['open', 'closed', 'pending'],
        default: 'open'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    courtName: {
        type: String
    },
    judge: {
        type: String
    },
    filingDate: {
        type: Date,
        required: true
    },
    nextHearingDate: {
        type: Date
    },
    caseAmount: {
        type: Number
    },
    documents: [{
        type: String
    }],
    timeline: [{
        date: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    notes: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Case', CaseSchema);