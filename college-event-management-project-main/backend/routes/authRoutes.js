const express = require('express');
const router = express.Router();
const { 
  register, 
  login, 
  logout, 
  refreshToken 
} = require('../controllers/authController');
const { validateRegister, validateLogin } = require('../middleware/validator');

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.post('/logout', logout);
router.post('/refresh-token', refreshToken);

module.exports = router;
