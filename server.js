// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
/*app.get('/', function(req, res) {
    res.render('pages/index');
}); */
app.get('/', function(req, res) {
    var drinks = [
        { name: 'Beer', drunkness: 3 },
        { name: 'Wine', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "My custome tagline from server.js file..";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');