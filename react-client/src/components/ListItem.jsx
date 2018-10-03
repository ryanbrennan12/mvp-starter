import React from 'react';

const ListItem = (props) => (
  <div>
    
    { props.item.OutboundLeg.DestinationId }
  </div>
)

export default ListItem;