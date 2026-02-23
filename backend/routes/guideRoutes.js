const express = require('express');
const router = express.Router();

// Mock data for guides
const guides = [
    { id: 1, title: 'Guide 1', category: 'Category 1' },
    { id: 2, title: 'Guide 2', category: 'Category 2' }
];

// GET all guides
router.get('/guides', (req, res) => {
    res.json(guides);
});

// GET guide by ID
router.get('/guides/:id', (req, res) => {
    const guide = guides.find(g => g.id === parseInt(req.params.id));
    if (!guide) return res.status(404).send('Guide not found');
    res.json(guide);
});

// GET guides by category
router.get('/guides/category/:category', (req, res) => {
    const filteredGuides = guides.filter(g => g.category === req.params.category);
    res.json(filteredGuides);
});

// POST a new guide
router.post('/guides', (req, res) => {
    const newGuide = {
        id: guides.length + 1,
        title: req.body.title,
        category: req.body.category
    };
    guides.push(newGuide);
    res.status(201).json(newGuide);
});

module.exports = router;