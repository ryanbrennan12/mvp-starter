import React from 'react';

const ListItem = (props) => (
  <div onClick={() => props.onClick()}>
    
    {props.city + ': $' + props.price}
    
  </div>
)

export default ListItem;