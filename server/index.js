var express = require('express');
var bodyParser = require('body-parser');
const apiHelper = require('../server-helper/apicall.js')
const db = require('../database-mongo/index.js')

//MONGO
// var items = require('../database-mongo');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
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

app.post('/liked', (req, res) => {
  console.log('TEST LIKED!!!', req.body.city, req.body.price)
  db.save(req.body.city, req.body.price)
  res.json('flight was saved to db')
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

