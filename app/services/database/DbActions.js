var Candidate = require('./Candidate.js');

function DbActions() {}
DbActions.prototype.insertAll = function(req, res, dbObj) {
    console.log('Inserted all items');
    Candidate.insert(req, res, dbObj);
}

DbActions.prototype.fetchAll = function(req, res, dbObj) {
    console.log('Inserted all items');
    Candidate.fetch(req, res, dbObj);
}
DbActions.prototype.fetchById = function(req, res, dbObj) {
    console.log('Inserted all items');
    Candidate.fetchById(req, res, dbObj);
}



var dbActions = new DbActions();

module.exports = dbActions;