import React from 'react';
//passing in seac rh function that has to be called in here

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      price: '',
      leave: '',
      return: '',
    }
  }


  
  onChangeCity(e) {
    console.log('This is the Aiport', e.target.value)
    this.setState({
      city: e.target.value
    })
  }
  onPriceChange(e) {
    console.log('This is the Price', e.target.value)
    this.setState({
      price: e.target.value
    })
  }
  onLeaveChange(e) {
    console.log('This is the Leave Date', e.target.value)
    this.setState({
      leave: e.target.value
    })
  }
  onReturnChange(e) {
    console.log('This is the Retun Date', e.target.value)
    this.setState({
      return: e.target.value
    })
  }
  
  
  //when are we calling?? have to bind function call to button click
  search() {
    //possibly add more parameters for AJAX call
    this.props.onSearch(this.state.city, this.state.price, this.state.leave, this.state.return);
  }

 
  render() {
    return (<div>
          Get me outta here:
          <p><input value={this.state.city} onChange={this.onChangeCity.bind(this)} /></p>
          This is all I have $$
          <p><input value={this.state.price} onChange={this.onPriceChange.bind(this)} /></p>
          Leaving
          <p><input value={this.state.leave} onChange={this.onLeaveChange.bind(this)} /></p>
          Coming Back
          <p><input value={this.state.return} onChange={this.onReturnChange.bind(this)} /></p>
          <button onClick={this.search.bind(this)}>Go Go Go!!!</button>

    </div>



    )
  }
}

export default Search