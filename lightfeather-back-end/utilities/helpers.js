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

module.exports = { transformSupervisors };
