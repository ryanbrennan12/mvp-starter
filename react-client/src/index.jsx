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

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  //pass through as props as onSearch
 search(city, price, leaveDate, returnDate) {
   console.log('Coming Through to search: ', city, price, leaveDate, returnDate)
   $.ajax({
     method: 'GET',
     url: '/flights',
     data: {code: city},
     dataType: 'json',
    }).done((data) => {
      console.log('we have the flights', data)
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