const express = require('express')
const app = express();

var dbRoutes = require('./app/routes/DbRoutes.js');

app.use('/db', dbRoutes);

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});