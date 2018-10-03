import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    There are { props.items.length } items.


    {props.items.map((item, i) => {

      <ListItem key={i} item={item}/>
    })}
  </div>
)

export default List;
// { props.items.map(item => <ListItem item={item}/>)}
