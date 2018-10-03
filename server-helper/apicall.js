const request = require('request');
var unirest = require('unirest');





let callApi = (city, amount, leaveDate, returnDate, cb) => {
  unirest.get(`https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/browsequotes/v1.0/US/USD/en-US/${city}-sky/US/${leaveDate}/${returnDate}`)
  .header("X-Mashape-Key", "oBL36Vab07mshN89Y6zhLzcGTFl2p1Rga7AjsnEoiHYwPJl0wM")
  .header("X-Mashape-Host", "skyscanner-skyscanner-flight-search-v1.p.mashape.com")
  .end(function (result) {
    cb(result.body.Quotes)
  });
  
}
// callApi('SFO', '2018-10-15', '2018-10-17')
// city, leaveDate, returnDate


module.exports.callApi = callApi;