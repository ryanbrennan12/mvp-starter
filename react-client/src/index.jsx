import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
  //will save every starred flight (these are faves) 
  //and the rip w/componentDidmount...maybe
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
      const quotes = data.filter(((quote) => {
        return quote.MinPrice <= price
      }))
      console.log('Quotes', quotes)
      this.setState({items: quotes})
    })

  }


  render () {
    return (<div>
      <h1>Item List</h1>
      <Search onSearch={this.search.bind(this)} />
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));