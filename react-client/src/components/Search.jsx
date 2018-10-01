import React from 'react';
//passing in seac rh function that has to be called in here

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      price: ''
    }
  }


  
  changeCity(e) {
    this.setState({
      city: e.target.value
    })
  }
  // onPriceChange(e) {
  //   this.setState({
  //     dest: e.target.value
  //   })
  // }
  
  
  
  
  //when are we calling?? have to bind function call to button click
  search() {
    //possibly add more parameters for AJAX call
    this.props.onSearch(this.state.city);
  }

 
  render() {
    return (<div>
          Get me outta here:
          <p><input value={this.state.city} onChange={this.changeCity.bind(this)} /></p>
          This is all I have $$
          {/* <p><input value={this.state.price} onPriceChange={this.onPriceChange.bind(this)} /></p> */}
          <button onClick={this.search.bind(this)}>Go Go Go!!!</button>

    </div>



    )
  }
}

export default Search