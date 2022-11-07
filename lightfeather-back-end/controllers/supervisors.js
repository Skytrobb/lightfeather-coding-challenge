const express = require('express');
const axios = require('axios');
const { transformSupervisors } = require('../utilities/helpers');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers');
    const formattedData = transformSupervisors(response.data);
    res.status(200).json(formattedData);
  } catch (error) {
    console.log('there was an error fetching the supervisors', error);
    res.status(500).send();
  }
});

module.exports = router;
