const async = require('async');

var Candidate = require('./Candidate.js');
var CandidatePersonal = require('./CandidatePersonal.js');
var Address = require('./Address.js');
var EmployementDetails = require('./EmployementDetails.js');
var DateUtils = require('./../DateUtils.js');
var EducationDetails = require('./EducationDetails.js');
var ReferenceDetails = require('./ReferenceDetails.js');
var EmergencyDetails = require('./EmergencyDetails.js');
var AdditionalInformation = require('./AdditionalInformation.js');



function DbActions() {}

DbActions.prototype.insertAll = function(req, res, dbObj) {
    var details = {};
    async.series([
        function(callback) { 
            Candidate.insert(req, res, dbObj, details, callback);
        },
        function(callback) { 
            console.log('Dbactions: ' + details.cid);
            
            async.parallel([
                function(completed) { 
                    CandidatePersonal.insert(req, res, dbObj, details, completed);
                },
                function(completed) {
                    Address.insert(req, res, dbObj, details, completed);
                },
                function(completed) {
                    EmployementDetails.insert(req, res, dbObj, details, completed);
                },
                function(completed) {
                    EducationDetails.insert(req, res, dbObj, details, completed);
                },
                function(completed) {
                    ReferenceDetails.insert(req, res, dbObj, details, completed);
                },
                function(completed) {
                    EmergencyDetails.insert(req, res, dbObj, details, completed);
                },
                function(completed) {
                    AdditionalInformation.insert(req, res, dbObj, details, completed);
                }
            ], function(err, results) {
                console.log('I am here')
                callback();
            });
        },
        function(callback) { 
            res.send("All details inserted");
            dbObj.end();
            callback();
        }
        
    ]);
    ;
    
    console.log('Inserted all items');
    
}

DbActions.prototype.fetchAll = function(req, res, dbObj) {
   
    Candidate.fetch(req, res, dbObj);
}
DbActions.prototype.fetchById = function(req, res, dbObj) {
  
    Candidate.fetchById(req, res, dbObj);
}

var dbActions = new DbActions();

module.exports = dbActions;