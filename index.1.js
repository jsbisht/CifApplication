const express = require('express')
const app = express();
var router = express.Router();
const mysql = require('mysql');
var bodyParser = require('body-parser');


//var dbRoutes = require('./app/routes/DbRoutes.js');

app.use(bodyParser.urlencoded({ extended: false }));
var json = app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pro@321",
 database: "cif_test"
});


con.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});






app.use('/db', router);
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});