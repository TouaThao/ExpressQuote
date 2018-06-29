const express = require('express')

let router = express.Router()

let quotesIn = [
    {
    quotes : 'Give a man a fish and you feed him for a day. Teach a man how to fish and you feed him for a lifetime.',
    name : 'Lao Tzu',
    }
];
  
router.get('/', function(req,res){
res.send(quotesIn)
});

router.post('/', function(req,res){
    quotesIn.push(req.body);
    res.sendStatus(201);
});

module.exports = router;