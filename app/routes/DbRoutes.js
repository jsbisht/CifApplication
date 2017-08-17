var express = require('express')
var router = express.Router()

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// Save profile details to DB
router.post('/save', function (req, res) {
    console.dir(req.body)
    res.send('Saved to DB');
})

module.exports = router