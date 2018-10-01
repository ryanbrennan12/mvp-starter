const request = require('request');
var unirest = require('unirest');


let callApi = (city) => {
  unirest.get(`https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/browseroutes/v1.0/US/USD/en-US/${city}-sky/ORD-sky/2018-11-01/2018-11-02`)
  .header("X-Mashape-Key", "oBL36Vab07mshN89Y6zhLzcGTFl2p1Rga7AjsnEoiHYwPJl0wM")
  .header("X-Mashape-Host", "skyscanner-skyscanner-flight-search-v1.p.mashape.com")
  .end(function (result) {
    console.log('this is the body', result.body);
  });
  
  }
  
  
  
  callApi('PHL')
  
  
  //   let options = {
  //     method: 'GET',
  //     url: 'http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/FR/eur/en-US/uk/us/anytime/anytime?apikey=prtl6749387986743898559646983194',
  //   }
  
  //   request(options, (err, res, body) => {
  //     var data = JSON.parse(body)
  //     console.log('this is the data', data)
  //   })

