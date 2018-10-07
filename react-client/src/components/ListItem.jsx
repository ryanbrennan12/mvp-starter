import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  background: #11E15A;
  /* border: 2px solid black; */
  border-radius: 10px;
  font-size: 15px;
  color: white;
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  margin-right: 8px;
  margin-top: 8px;
  
  
  
  /* color:blue; */
`;


const ListItem = (props) => (
  <div>
     {/* savimng to DB on this click */}
     <Button onClick={() => props.onClick(props.city, props.price)}>Select</Button>
     {props.city + ': $' + props.price}
  </div>
)

export default ListItem;