var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mvp')
.then(() => {
  console.log('DATABASE CONNECTED!!!')
})
.catch((err) => {
  console.log('DB ERROR CONNECTING', err)
})

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  city: String,
  price: Number 
});

var Item = mongoose.model('Item', itemSchema);

// new Item({
//   quantity: 44,
//   description: 'ryan'
// }).save().catch((err) => {
//   console.log('ERROR IN SAVING', err)
// })



// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;