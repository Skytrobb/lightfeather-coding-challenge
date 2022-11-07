const express = require('express');
const { validationResult } = require('express-validator');
const { submitValidators } = require('../utilities/validators');

const router = express.Router();

router.post('/', submitValidators, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.status(200).send({ message: 'no errors here' });
  console.log(`request is successful: ${JSON.stringify(req.body)}`);
  return null;
});

module.exports = router;
