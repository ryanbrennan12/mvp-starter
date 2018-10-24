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
  outline: 0;
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
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
          <p><Input name='city' value={this.state.city} onChange={this.handleChange} /></p>
    </Div>
      <Div>
        Budget
          <p><Input name='price' value={this.state.price} onChange={this.handleChange} /></p>
      </Div>
      <Div>
        Depart
          <p><Input name='leave' value={this.state.leave} onChange={this.handleChange} /></p>
      </Div>
      <Div>
        Coming Back
          <p><Input name='return' value={this.state.return} onChange={this.handleChange} /></p>
      </Div>
      <Div>
    <Button onClick={this.search}>Search Flights</Button>
    </Div>
  </Div>

    )
  }
}

export default Search



