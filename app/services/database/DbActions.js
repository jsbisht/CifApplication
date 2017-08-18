//var Candidate = require('./Candidate.js');

function DbActions() {}
DbActions.prototype.insertAll = function() {
    console.log('Inserted all items');
}

var dbActions = new DbActions();

module.exports = dbActions;