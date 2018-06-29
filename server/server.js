
const express = require('express');
const bodyParser = require('body-parser');
const quoteRoute = require('./routes/quotes.js')
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded( {extended : true} ))

app.use(express.static('server/public'));

app.use('/quotes', quoteRoute)

app.listen(port, function() {
    console.log('listening on port', port);
});