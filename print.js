var phantom = require('phantom');   

phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {
        //page.property('viewportSize', { width: 1024, height: 768 });
        page.property('paperSize', {format: 'A4', orientation: 'portrait'});
        //page.property('zoomFactor', 1);
        page.open("http://localhost:3000/#!/personal").then(function(status) {
            page.render('google.pdf').then(function() {
                console.log('Page Rendered');
                ph.exit();
            });
        });
    });
});