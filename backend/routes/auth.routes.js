const express = require('express');
const { registrar, login } = require('../controllers/auth.controller');
const router = express.Router();

router.post('/registrar', registrar);
router.post('/login', login);

module.exports = router;
