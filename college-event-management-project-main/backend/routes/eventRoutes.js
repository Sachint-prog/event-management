const express = require('express');
const router = express.Router();
const { createEvent, getEvents, registerForEvent } = require('../controllers/eventController');
const { auth, checkRole } = require('../middleware/auth');

router.get('/', getEvents);
router.post('/', auth, checkRole(['organizer', 'admin']), createEvent);
router.post('/register/:id', auth, registerForEvent);

module.exports = router;
