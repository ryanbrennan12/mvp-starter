import React from 'react';
import styled from 'styled-components'

//passing in seac rh function that has to be called in here

const Button = styled.button`
  background: #11E15A;
  /* border: 2px solid black; */
  border-radius: 10px;
  font-size: 20px;
  color: white;
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  `;
  
  
  /* color:blue; */
const Div = styled.div`
  margin-top: 40px;
  padding: 5px;
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  font-size:15pt;
  color: white;
  display: inline-block;

`
const Input = styled.input`
  border-radius: 3px;
  height:20px;
  font-size:14pt;
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
`
const H1 = styled.h1`
  font-size:25pt;
  font-family:  Verdana;
`
const H2 = styled.h2`
  font-size:15pt;
`

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
    return (
      <Div>
        <H1>Lowest Price Flights</H1>
        <H2>justGo's finder is here to support your spontaneity</H2>
    <Div>
      Leaving From
          <p><Input value={this.state.city} onChange={this.onChangeCity.bind(this)} /></p>
    </Div>
      <Div>
        Budget
          <p><Input value={this.state.price} onChange={this.onPriceChange.bind(this)} /></p>
      </Div>
      <Div>
        Depart
          <p><Input value={this.state.leave} onChange={this.onLeaveChange.bind(this)} /></p>
      </Div>
      <Div>
        Coming Back 
          <p><Input value={this.state.return} onChange={this.onReturnChange.bind(this)} /></p>
      </Div>
      <Div>
    <Button onClick={this.search.bind(this)}>Search Flights</Button>
    </Div>
  </Div>
     
    )
  }
}

export default Search
        


