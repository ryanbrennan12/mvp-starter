import React from 'react';

const ListItem = (props) => (
  <div>
     <button onClick={() => props.onClick(props.city, props.price)}>I like dis One!</button>
    {props.city + ': $' + props.price}
    
  </div>
)

export default ListItem;