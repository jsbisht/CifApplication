const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');
const path = require('path');
var phantom = require('phantom');
var http = require('http');
var fs = require('fs');

router.get('/toPDF', function (req, res) {
    var download = function (url, dest, cb) {
        var file = path.resolve(__dirname + '/../..') + '/Cif_Form.pdf';
        
        var filename = path.basename(file);
    
        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', "application/pdf");
    
        var filestream = fs.createReadStream(file);
        filestream.pipe(res);

        cb();
    };

    phantom.create().then(function (ph) {
        ph.createPage().then(function (page) {
            //page.property('viewportSize', { width: 1024, height: 768 });
            page.property('paperSize', { format: 'A4', orientation: 'portrait' });
            //page.property('zoomFactor', 1);
            page.open("http://localhost:3000/#!/personal").then(function (status) {
                console.log('Tring to download file');
                page.render('Cif_Form.pdf').then(function() {
                    console.log('Page Rendered');
                    download('http://localhost:3000/Cif_Form.pdf', 'localhost:3000/api/toPDF', function () {
                        console.log('Download successful');
                        ph.exit();
                    })
                });
            });
        });
    });
})

module.exports = router;