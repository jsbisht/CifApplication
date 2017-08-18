var Candidate = require('./Candidate.js');

function DbActions() {}
DbActions.prototype.insertAll = function(req, res, dbObj) {
    console.log('Inserted all items');
    Candidate.insert(req, res, dbObj);
}

var dbActions = new DbActions();

module.exports = dbActions;