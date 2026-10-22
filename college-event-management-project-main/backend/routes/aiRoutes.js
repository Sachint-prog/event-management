const express = require('express');
const router = express.Router();
const { generateDescription, getAttendancePrediction } = require('../controllers/aiController');
const { auth, checkRole } = require('../middleware/auth');

router.post('/generate-description', auth, checkRole(['organizer', 'admin']), generateDescription);
router.post('/predict-attendance', auth, checkRole(['organizer', 'admin']), getAttendancePrediction);

module.exports = router;
