import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    There are { props.items.length } items.


    {props.items.map((item, i) => {
      return (
        //[city, price]
        <ListItem key={i} city={item[0]} price={item[1]}/>
      )
    })}
  </div>
)
export default List;



// { props.items.map(item => <ListItem item={item}/>)}
