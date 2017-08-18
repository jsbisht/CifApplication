function Candidate() { }
Candidate.prototype.insert = function (req, res, dbObj) {
    console.log('Inserted all items');
   
    var id = 8;
    var args = {
        cid: req.body.cid, EmployeeName: req.body.employeeName,
        EmployeeId: req.body.employeeId
    };
    var insQuery = 'insert into candidate SET ?';
    var query = dbObj.query(insQuery, args, function (err, rows, fields) {
        dbObj.end();
        if (!err) {
            console.log('The solution is: ', rows, query);
            res.send('details of ' + req.body.employeeName + ' Saved to DB  with Candidate id of ' +
                req.body.cid);
        }
        else {
            console.log('Error while performing Query.' + err);
            res.send('Error while performing Query.' + err);
        }
    });
}


var candidate = new Candidate();

module.exports = candidate;