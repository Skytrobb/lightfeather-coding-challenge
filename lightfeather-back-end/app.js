const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
