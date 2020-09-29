const express = require('express');
const path = require('path');
const app = express('');
const port = 8000


require('./loaders')(app);



app.listen(8000, function () {
  console.log(`Example app listening at http://localhost:8000`)
});
