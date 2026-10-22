const axios = require('axios');

exports.generateDescription = async (req, res) => {
  try {
    const { title, tags } = req.body;
    const response = await axios.post(`${process.env.AI_SERVICE_URL}/generate-description`, {
      title,
      tags
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ 
      description: "AI Service is temporarily unavailable. Fallback: Join us for this exciting event!"
    });
  }
};

exports.getAttendancePrediction = async (req, res) => {
  try {
    const response = await axios.post(`${process.env.AI_SERVICE_URL}/predict-attendance`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ predicted_count: 100, message: "AI Service offline" });
  }
};
