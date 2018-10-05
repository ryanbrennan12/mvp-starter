import React from 'react';
import styled from 'styled-components'
//passing in seac rh function that has to be called in here
const Div = styled.div`
  padding: 20px
`;

const Button = styled.button`
  background: #00FFFF;
  border: 5px solid black;
  border-radius: 15px;
  font-size: 20px;
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  
  /* color:blue; */
`;




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
    this.setState({
      city: e.target.value
    })
  }
  onPriceChange(e) {
    this.setState({
      price: e.target.value
    })
  }
  onLeaveChange(e) {
    this.setState({
      leave: e.target.value
    })
  }
  onReturnChange(e) {
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
    return (<Div>
          Get me outta here: 
          <p><input value={this.state.city} onChange={this.onChangeCity.bind(this)} /></p>
          This is all I have $$
          <p><input value={this.state.price} onChange={this.onPriceChange.bind(this)} /></p>
          Leaving
          <p><input value={this.state.leave} onChange={this.onLeaveChange.bind(this)} /></p>
          Coming Back
          <p><input value={this.state.return} onChange={this.onReturnChange.bind(this)} /></p>
          {/* <input type="submit" /> */}
          <Button onClick={this.search.bind(this)}>Find Me Flights plz✌️✌️✈️</Button>
    </Div>
  
     
        



    )
  }
}

export default Search