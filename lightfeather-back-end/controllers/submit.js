const express = require('express');
const { body, validationResult } = require('express-validator');

const router = express.Router();

router.post('/', [
  body('email').optional().isEmail().withMessage('must be valid email address'),
  body('firstName').not().isEmpty().isAlpha()
    .withMessage("first name can't be empty or contain numbers")
    .withMessage('please provide a first name'),
  body('lastName').not().isEmpty().isAlpha()
    .withMessage("name can't be empty or contain numbers")
    .withMessage('please provide a last name'),
  body('phoneNumber').optional().isMobilePhone('en-US'),
  body('supervisor').not().isEmpty().withMessage('please provide a supervisor'),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.status(200).send({ message: 'no errors here' });
  console.log(`request is successful: ${JSON.stringify(req.body)}`);
  return null;
});

module.exports = router;
