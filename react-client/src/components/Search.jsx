import React from 'react';
//passing in seac rh function that has to be called in here

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
  }

  onChange(e) {
    this.setState({
      city: e.target.value
    })
  }
  //when are we calling?? have to bind function call to button click
  search() {
    this.props.onSearch(this.state.city);
  }

 



}