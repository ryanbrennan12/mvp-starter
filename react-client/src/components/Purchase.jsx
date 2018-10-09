import React from 'react';
import styled from 'styled-components'

const DivContainer = styled.div`
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  margin: 0 auto; 
  margin-top: -170px;
  border:4px solid gray;
  font-size: 15px;
  height: 120px;
  width: 640px;
  border-radius: 10px;
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



const Purchase = () => {
  return (

    <DivContainer>
       <DivOutBound>
                <h2Out><span>Outbond:</span> Thu, Oct 11, 2018</h2Out>
                
        </DivOutBound>
        <div class="big_box box">
                <div class="col-sm-3">
                    <div class="operat_airline">
                        <h2Box>Operated by Compass Airlines</h2Box>
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="main">
                        <div class="time">
                            <h2>5:40 AM<span>SFO</span></h2>
                        </div>
                        <DestiDiv>
                            <h3>1h 22m</h3>
                            <div class="line"></div>
                            <h4>Non-stop</h4>
                        </DestiDiv>

                        <div class="time2">
                            <h2>7:02 AM<span>Lax</span></h2>
                        </div>
                        <a href="#"> <i class="fa fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
    
    </DivContainer>
  )
}

export default Purchase