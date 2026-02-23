const express = require('express');
const router = express.Router();

// Mock database
let cases = [];

// POST /cases - Create a new case
router.post('/cases', (req, res) => {
    const newCase = req.body;
    cases.push(newCase);
    res.status(201).json(newCase);
});

// GET /cases - Retrieve all cases
router.get('/cases', (req, res) => {
    res.json(cases);
});

// GET /cases/:id - Retrieve a case by ID
router.get('/cases/:id', (req, res) => {
    const caseId = req.params.id;
    const foundCase = cases.find(c => c.id === caseId);
    if (foundCase) {
        res.json(foundCase);
    } else {
        res.status(404).json({ message: 'Case not found' });
    }
});

// PUT /cases/:id - Update a case by ID
router.put('/cases/:id', (req, res) => {
    const caseId = req.params.id;
    const index = cases.findIndex(c => c.id === caseId);
    if (index !== -1) {
        cases[index] = req.body;
        res.json(cases[index]);
    } else {
        res.status(404).json({ message: 'Case not found' });
    }
});

// DELETE /cases/:id - Delete a case by ID
router.delete('/cases/:id', (req, res) => {
    const caseId = req.params.id;
    const index = cases.findIndex(c => c.id === caseId);
    if (index !== -1) {
        cases.splice(index, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ message: 'Case not found' });
    }
});

module.exports = router;