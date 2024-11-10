const express = require('express');
const router = express.Router();
const AdoptForm = require('../Model/AdoptFormModel');

// Save an adoption form
const saveForm = async (req, res) => {
    try {
        const { email, livingSituation, phoneNo, previousExperience, familyComposition, petId } = req.body;
        const form = await AdoptForm.create({ email, livingSituation, phoneNo, previousExperience, familyComposition, petId });
        res.status(200).json(form);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all adoption forms
const getAdoptForms = async (req, res) => {
    try {
        const forms = await AdoptForm.find().sort({ createdAt: -1 });
        res.status(200).json(forms);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a specific adoption form by ID
const deleteForm = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await AdoptForm.findByIdAndDelete(id);
        if (!form) {
            return res.status(404).json({ message: 'Form not found' });
        }
        res.status(200).json({ message: 'Form deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete all requests for a specific pet by petId
const deleteAllRequests = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await AdoptForm.deleteMany({ petId: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Forms not found' });
        }
        res.status(200).json({ message: 'Forms deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Define the routes
router.post('/save', saveForm);
router.get('/getForms', getAdoptForms);
router.delete('/reject/:id', deleteForm);
router.delete('/delete/many/:id', deleteAllRequests);

module.exports = router;
