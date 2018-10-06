import React from 'react';
import ListItem from './ListItem.jsx';
import styled from 'styled-components'

// import '/Users/ryanbrennan/Desktop/Sprints/MVP/rpt09-mvp-starter/styles/styles.css'
const Div = styled.div`
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  font-size: 17px;
  color: black;
  margin-top: 140px;
  
`

const List = (props) => (
  <Div className="quote-list">
    We Found You { props.items.length } Flights


    {props.items.map((item, i) => {
      return (
        //[city, price]
        <div>
        <ListItem key={i} city={item[0]} price={item[1]} onClick={props.onClick}/>
      
        </div>
      )
    })}
  </Div>
)
export default List;



// { props.items.map(item => <ListItem item={item}/>)} 
