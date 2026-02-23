const express = require('express');
const router = express.Router();

// Mock database for demonstration
let documents = [];

// POST /documents/upload
router.post('/upload', (req, res) => {
    const { caseId, fileName, content } = req.body;
    const id = documents.length + 1; // Simple ID generation
    const newDocument = { id, caseId, fileName, content };
    documents.push(newDocument);
    res.status(201).json(newDocument);
});

// GET /documents/:caseId
router.get('/:caseId', (req, res) => {
    const { caseId } = req.params;
    const caseDocuments = documents.filter(doc => doc.caseId === caseId);
    res.status(200).json(caseDocuments);
});

// DELETE /documents/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    documents = documents.filter(doc => doc.id !== parseInt(id));
    res.status(204).send();
});

module.exports = router;
