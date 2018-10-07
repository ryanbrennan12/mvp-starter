import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  margin: 0 auto; 
  margin-top: -70px;
  border:3px solid gray;
  font-size: 15px;
  height: 120px;
  width: 640px;
  border-radius: 25px;
  /* background-color: #00B2D6; */
  `
  const Ptag = styled.h1`
     /* padding-top:10px; */
     position:absolute;
     text-align:center;
  `


const Purchase = () => {
  return (

    <Div>
      <Ptag>10:00AM</Ptag>
      <p>SFO</p>
    
    </Div>
  )
}

export default Purchase