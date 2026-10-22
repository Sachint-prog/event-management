const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, venue, category, maxParticipants } = req.body;
    const event = new Event({
      title,
      description,
      date,
      venue,
      category,
      maxParticipants,
      organizer: req.user.id
    });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find({ status: 'approved' }).populate('organizer', 'name email');
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.registerForEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (event.participants.includes(req.user.id)) {
      return res.status(400).json({ message: 'Already registered' });
    }

    event.participants.push(req.user.id);
    await event.save();
    res.json({ message: 'Successfully registered' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
