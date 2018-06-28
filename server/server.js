
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.static('server/public'));

app.get('/word', function(req, res){
  

  res.send(quotesIn);
});

app.post('/newAdd', function(req, res){

  console.log('----------',req);

});




let quotesIn = []


class Quotes {
  constructor(quotes,name){
    this.quotes = quotes;
    this.name =name;
  }
}


function addQuotes( quotes,name){
  quotesIn.push( new Quotes(quotes,name))
}

addQuotes('Compound interest is the most powerful force in the universe' , 'Albert Einstein')
addQuotes('Oh farmers, pray that your summers be wet and your winters clear' , 'Virgil')



app.listen(port, function() {
    console.log('listening on port', port);
});