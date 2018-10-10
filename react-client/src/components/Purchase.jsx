import React from 'react';
import styled from 'styled-components'

const DivContainer = styled.div`
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 0 auto; 
  margin-top: -170px;
  border:4px solid gray;
  font-size: 15px;
  height: auto;
  width: 640px;
  position: absolute;
  border-radius: 10px;
  background: white;
  /* background-color: #00B2D6; */
  `
  const DivOutBound = styled.div`
   
  `
  const h2Out = styled.h2`
    color: #9b98a6;
    float: left;
    font-size: 26px;
  `
 const h2Box = styled.h2`
    color: #9b98a6;
    font-size: 16px;
    padding-top: 106px;
 `
const DestiDiv = styled.div`
  width: 46%;
`



const Purchase = (props) => {
  return (

    <DivContainer>
       <DivOutBound>
                <h2Out><span>Outbond:</span>{props.leave}</h2Out>
                
        </DivOutBound>
        <div className="big_box box">
                <div className="col-sm-3">
                    <div className="operat_airline">
                        <h2Box>Operated by Compass Airlines</h2Box>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="main">
                        <div className="time">
                            <h2>5:40 AM<span>{props.origin}</span></h2>
                        </div>
                        <DestiDiv>
                            <h3>1h 22m</h3>
                            <div className="line"></div>
                            <h4>Non-stop</h4>
                        </DestiDiv>

                        <div className="time2">
                            <h2>7:02 AM<span>{props.city}</span></h2>
                        </div>
                        <a href="#"> <i className="fa fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
    
    </DivContainer>
  )
}

export default Purchase

  // city: null,
  // price: null,
  // leave: null,
  // returning: null,
  // origin: null