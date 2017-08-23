const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const blobStream  = require('blob-stream');

router.get('/toPDF', function (req, res) {
    var phantom = require('phantom');   
    
    phantom.create().then(function(ph) {
        ph.createPage().then(function(page) {
            page.open("http://www.google.com").then(function(status) {
                page.render('google.pdf').then(function() {
                    console.log('Page Rendered');
                    ph.exit();
                });
                /*res.setHeader('Content-disposition', 'attachment; filename="test.pdf"');
                res.setHeader('Content-type', 'application/pdf');
                res.send(page);
                ph.exit();*/
            });
        });
    });
})

router.get('/getPDF', function (req, res) {
    res.setHeader('Content-disposition', 'attachment; filename="test.pdf"');
    res.setHeader('Content-type', 'application/pdf');

    var doc = new PDFDocument();
    var stream = doc.pipe(blobStream());
    
    // draw some text
    doc.fontSize(25)
       .text('Here is some vector graphics...', {
           columns: 3
       });
       
    // some vector graphics
    doc.save()
       .moveTo(100, 150)
       .lineTo(100, 250)
       .lineTo(200, 250)
       .fill("#FF3300");
       
    doc.circle(280, 200, 50)
       .fill("#6600FF");
       
    // an SVG path
    doc.scale(0.6)
       .translate(470, 130)
       .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
       .fill('red', 'even-odd')
       .restore();
       
    // and some justified text wrapped into columns
    doc.text('And here is some wrapped text...', 100, 300)
       .font('Times-Roman', 13)
       .moveDown()
       .text('Bahut bada text', {
         width: 412,
         align: 'justify',
         indent: 30,
         columns: 2,
         height: 300,
         ellipsis: true
       });
       
    // end and display the document in the iframe to the right
    doc.pipe(res);
    doc.end();
    // stream.on('finish', function() {
    //   iframe.src = stream.toBlobURL('application/pdf');
    // });
});

module.exports = router;