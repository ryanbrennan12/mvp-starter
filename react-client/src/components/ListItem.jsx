import React from 'react';

const ListItem = (props) => (
  <div>
    
    {props.city + ': $' + props.price}
    {/* { props.item.price} */}
  </div>
)

export default ListItem;