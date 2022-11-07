const { body } = require('express-validator');

const submitValidators = [
  body('email').optional().isEmail().withMessage('must be valid email address'),
  body('firstName').not().isEmpty().withMessage('please provide a first name')
    .isAlpha()
    .withMessage('first name must only contain alpha characters'),
  body('lastName').not().isEmpty().withMessage('please provide a last name')
    .isAlpha()
    .withMessage('last name must only contain alpha characters'),
  body('phoneNumber').optional().isMobilePhone('en-US').withMessage('invalid phone number'),
  body('supervisor').not().isEmpty().withMessage('please provide a supervisor'),
];

module.exports = { submitValidators };
