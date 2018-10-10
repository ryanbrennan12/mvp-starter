var express = require('express');
const mongoose = require('mongoose')
var bodyParser = require('body-parser');
const apiHelper = require('../server-helper/apicall.js')
//db stuffs
const db = require('../database-mongo/index.js')
const Repo = mongoose.model('Quote')

//MONGO
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));



app.post('/flights', function (req, res) {
  let city = req.body.city
  let price = req.body.price
  let leaveDate = req.body.leaveDate
  let returnDate = req.body.returnDate
  // console.log('THESE ARE THE THINGS', city, price, leaveDate, returnDate)

  apiHelper.callApi(city, price, leaveDate, returnDate, (data) => {
    
    res.send(data)
  })
});

app.post('/reroute', ((req, res) => {
  console.log('Body on Reroute', req.body)
  // res.redirect('https://www.google.com')
}))



app.post('/liked', (req, res) => {
  let origin= req.body.origin;
  let city = req.body.city;
  let price = req.body.price;
  let leave = req.body.leave;
  let returning= req.body.returning;
  db.save(city, price)
  ///SENDING BACK FOR FETCH
  res.json({origin: origin, city: city, price: price, leave: leave, returning: returning})
})

app.get('/liked', ((req, res) => {
  Repo.find({})
  .limit(10)
  .sort({price: -1})
  .then((data) => {
    let output = []
    data.forEach((quote) => {
      output.push([quote.city, quote.price])
    })
    return output
  }).then((sorted) => {
    res.json(sorted)
  }).catch((err) => {
    console.log('ERROR IN /liked', err)
  })
}))

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

