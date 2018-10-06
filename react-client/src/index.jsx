import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import List from './components/List.jsx';
// const { filterAsync } = require('node-filter-async');
const filter = require('promise-filter')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  //will save every starred flight (these are faves) 
  // and the rip w/componentDidmount...maybe
  componentDidMount() {
    $.ajax({
      url: '/liked', 
      success: (data) => {
        this.setState({
          items: data
        })
        console.log('do I have a body?', data)
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  //pass through as props as onSearch
  clickMe(city, price) {
   
    $.ajax({
      method: 'POST', 
      url: '/liked',
      data: { city: city, price: price },
      dataType: 'json'
    }).done((data) => {
      //only works if we get it back sannn
      console.log(data)
    })

  }
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
      console.log('THIS IS THE DATA', data)
      Promise.resolve(data.Quotes)
        .then(filter((quote) => quote.MinPrice <= price))
        .then((prices) => {
          let output = []
          prices.forEach((price) => {
            data.Places.forEach((place) => {
              if (price.OutboundLeg.DestinationId === place.PlaceId) {
                output.push([place.CityName, price.MinPrice])
              }
            })
          })
          return output;
        })
        .then((results) => {
          // console.log('RESULTS', results)
          this.setState({items: results})
          console.log(this.state)
        })
      })
    }
    render() {
      return (<div>
        <div className="header">
        <h1 className="header-chumpy">justGo</h1>
        <img className="my-svg-alternate" src="flight.svg" alt="logo"/>
        </div>
        <Search onSearch={this.search.bind(this)} />
        <List items={this.state.items} onClick={this.clickMe.bind(this)}/>
        {/* <VideoList videos={this.state.videos} onClick={this.handleClick.bind(this)}/> */}
      </div>)
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));


<div class="header">
  <img src="img/logo.png" alt="logo" />
  <h1>My website name</h1>
</div>


