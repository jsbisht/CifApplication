const express = require('express')
const router = express.Router()
const mysql = require('mysql');

var dbActions = require('../services/database/DbActions.js');

var dbObj = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cif_test"
});

dbObj.connect(function(err){
  if(!err) {
      console.log("Database is connected ... nn");    
  } else {
      console.log("Error connecting database ... nn");    
  }
});

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next();
})

// Save profile details to DB
router.post('/save', function (req, res) {
    console.dir(req.body)
    dbActions.insertAll();
    res.send('Saved to DB');
})

module.exports = router;