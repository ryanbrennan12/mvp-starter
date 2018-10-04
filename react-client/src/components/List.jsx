import React from 'react';
import ListItem from './ListItem.jsx';
// import '/Users/ryanbrennan/Desktop/Sprints/MVP/rpt09-mvp-starter/styles/styles.css'

const List = (props) => (
  <div className="quote-list">
    There are { props.items.length } items.


    {props.items.map((item, i) => {
      return (
        //[city, price]
        <div>
        <ListItem key={i} city={item[0]} price={item[1]} onClick={props.onClick}/>
      
        </div>
      )
    })}
  </div>
)
export default List;



// { props.items.map(item => <ListItem item={item}/>)} 
