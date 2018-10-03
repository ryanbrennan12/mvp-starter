import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
const { filterAsync } = require('node-filter-async');
const filter = require('promise-filter')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],   //prices
      dests: []
    }
  }
  //will save every starred flight (these are faves) 
  // and the rip w/componentDidmount...maybe
  // componentDidMount() {
  //   $.ajax({
  //     url: '/items', 
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  //pass through as props as onSearch
  search(city, price, leaveDate, returnDate) {
    console.log('this is the city', city)
    $.ajax({
      method: 'POST',
      url: '/flights',
      data: {
        city: city,
        price: price,
        leaveDate: leaveDate,
        returnDate: returnDate
      },
      dataType: 'json',
    }).done((data) => {
      //data is coming through as Places and Quotes
      console.log('This is data', data)

      Promise.resolve(data.Quotes)
        .then(filter((quote) => quote.MinPrice <= price))
        .then((prices) => {
           prices.map((price) => {
            let priceDestId = price.OutboundLeg.DestinationId //Def a number
            // console.log('PRICE ID', priceDestId)
            data.Places.map((place) => {
              let destiId = place.PlaceId
              console.log(priceDestId)
              if (destiId === priceDestId) {
                 console.log('true')
              }
            })
          })
        }).then((results) => {
          console.log('OMG puhleeze', results)
        })

                


      // const quotes = data.Quotes.filter(((quote) => {
      //     if (quote.MinPrice <= price) {
      //       return quote
      //     }
      // }))

      //   const final = quotes.forEach((product) => {
      //    data.Places.forEach((place) => {
      //      if (place.PLaceId[product.OutboundLeg.DestinantionId]) {
      //        return [quote.MinPrice, place.CityName]
      //      }
      //    })
      //  })

      //  this.setState({items: quotes})
    })
  }





  render() {
    return (<div>
      <h1>Item List</h1>
      <Search onSearch={this.search.bind(this)} />
      <List items={this.state.items} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));