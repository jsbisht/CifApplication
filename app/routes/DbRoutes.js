const express = require('express')
const router = express.Router()
const mysql = require('mysql');

var dbActions = require('../services/database/DbActions.js');


var dbObj = mysql.createConnection({
  host: '172.20.1.135',
  user: "remoteDbuser",
  password: "pro@321",
  database: "cif_test_db"
});


dbObj.connect(function (err) {
  if (!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Error connecting database ... nn  ::: " + err);
  }
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next();
})



// Save profile details to DB
router.post('/save', function (req, res) {
  dbActions.insertAll(req, res, dbObj);
});
router.get('/get', function (req, res) {
  dbActions.fetchAll(req, res, dbObj);

});

router.get('/get/:cid', function (req, res) {
  dbActions.fetchById(req, res, dbObj);
});
 

module.exports = router;