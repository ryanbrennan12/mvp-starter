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
  outline: 0;
`;
  
const Button2 = styled.button`
background: #FF851B;
/* border: 2px solid black; */
border-radius: 10px;
font-size: 15px;
color: white;
font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
margin-right: 8px;
margin-top: 8px;
outline: 0;
`



const ListItem = (props) => (
  <div>
     {/* savimng to DB on this click */}
     <Button2 onClick={() => props.onDelete(props.city)}>X</Button2>
     <Button onClick={() => props.onClick(props.city, props.price, props.leave, props.returning, props.origin)}>Select</Button>
     {props.city + ': $' + props.price} 
     
  </div>
)

export default ListItem;