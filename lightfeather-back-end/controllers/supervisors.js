const express = require('express');

const router = express.Router();
const axios = require('axios');

const R = require('ramda');

const isStringInteger = (x) => !Number.isInteger(parseInt(x.jurisdiction, 10));

const buildString = (x) => `${x.jurisdiction} - ${x.lastName}, ${x.firstName}`;

const transformSupervisors = (supervisors) => {
  // remove supervisors with numerical jurisdictions
  const filteredNumericalJurisdictions = R.filter(isStringInteger, supervisors);

  const jurisdictionComp = R.comparator((a, b) => a.jurisdiction < b.jurisdiction);
  const lastNameComp = R.comparator((a, b) => a.lastName < b.lastName);
  const firstNameComp = R.comparator((a, b) => a.firstName < b.firstName);

  // sort the filtered list by jurisdiction, last name, and first name
  const sortedSupervisors = filteredNumericalJurisdictions.sort(
    (a, b) => jurisdictionComp(a, b) || lastNameComp(a, b) || firstNameComp(a, b),
  );

  // format object into array of strings
  const formattedData = R.map(buildString, sortedSupervisors);

  return formattedData;
};

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
