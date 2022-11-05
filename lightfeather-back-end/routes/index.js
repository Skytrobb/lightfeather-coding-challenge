const express = require('express');

const router = express.Router();
const supervisors = require('../controllers/supervisors');
const submit = require('../controllers/submit');

router.use('/api/supervisors', supervisors);
router.use('/api/submit', submit);

module.exports = router;
