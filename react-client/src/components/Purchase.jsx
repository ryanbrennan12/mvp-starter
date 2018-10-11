import React from 'react';
import styled from 'styled-components'

const DivContainer = styled.div`
  font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  margin: 0 auto; 
  margin-top: 10px;
  border:4px solid gray;
  font-size: 15px;
  height: auto;
  width: 575px;
  position: absolute;
  border-radius: 10px;
  background: white;
  
  /* background-color: #00B2D6; */
  `
  const DivOutBound = styled.div`
   float: left;
  `
  const DivInBound = styled.div`
   float: left;
   margin-left: 50px;

  `
  const h2Out = styled.h2`
    color: #9b98a6;
    float: left;
    font-size: 26px;
  `
 const h2Box = styled.h2`
    color: #9b98a6;
    font-size: 2225px;
    padding-top: 106px;
 `
const DestiDiv = styled.div`
width: 46%;
margin: 0;
`
const Button2 = styled.button`
background:  #00B2D6;
/* border: 2px solid black; */
border-radius: 10px;
font-size: 15px;
color: white;
font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
margin-right: 10px;
margin-top: 8px;
outline: 0;
`
const Button3 = styled.button`
background:  #11E15A;
/* border: 2px solid black; */
border-radius: 10px;
font-size: 15px;
color: white;
font-family:  Arial Rounded MT Bold,Helvetica Rounded,Arial,sans-serif;
right: 0;
bottom: 0;
position: absolute
outline: 0;
`
    



const Purchase = (props) => {
    console.log('THESE ARE PROPS', props)
    let time = (Math.floor(Math.random() * 5) + 2) + 'h ' +  (Math.floor(Math.random() * 49) + 10) + 'm'
  return (

    <DivContainer>
       <DivOutBound>
                <h2Out><span>Outbound:</span> {props.leave}</h2Out>
                
        <div className="big_box box">
                <div className="col-sm-3">
                    <div className="operat_airline">
                        <h2Box>Operated by Southwest Airlines</h2Box>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="main">
                        <div className="time">
                            <h4>{Math.floor(Math.random() * 6) + 4}:{Math.floor(Math.random() * 30) + 10} AM<span> Leaving from {props.origin}</span></h4>
                        </div>
                        <DestiDiv>
                            <h4>{time}</h4>
                            <div className="line"></div>
                            <h4>Non-stop Flight</h4>
                        </DestiDiv>

                        <div className="time2">
                            <h4>{Math.floor(Math.random() * 6) + 4}:{Math.floor(Math.random() * 30) + 10} AM<span> Arriving in {props.city}</span></h4>
                        </div>
                        <a href="#"> <i className="fa fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
        </DivOutBound>
        <DivInBound>
                <h2Out><span>Inbound:</span> {props.return}</h2Out>
                
        <div className="big_box box">
                <div className="col-sm-3">
                    <div className="operat_airline">
                        <h2Box>Operated by SouthWest Airlines</h2Box>
                    </div>
                </div>
                <div className="col-sm-9">
                    <div className="main">
                        <div className="time">
                            <h4>{Math.floor(Math.random() * 12)}:{Math.floor(Math.random() * 49) + 10} AM<span> Leaving from {props.city}</span></h4>
                        </div>
                        <DestiDiv>
                            <h4>{time}</h4>
                            <div className="line"></div>
                            <h4>Non-stop Flight</h4>
                        </DestiDiv>

                        <div className="time2">
                            <h4>{Math.floor(Math.random() * 12)}:{Math.floor(Math.random() * 49) + 10} AM<span> Arriving in {props.origin}</span></h4>
                        </div>
                        <a href="#"> <i className="fa fa-angle-down"></i></a>
                    </div>
                </div>
            </div>
        </DivInBound>
    <Button2 onClick={() => props.onClose()}>close</Button2>
    <Button3><a href={'https://www.southwest.com/air/booking/select.html?originationAirportCode=' + props.origin + '&destinationAirportCode=LAS&returnAirportCode=&departureDate=' + props.leave + '&departureTimeOfDay=ALL_DAY&returnDate=' +  props.return + '&returnTimeOfDay=ALL_DAY&adultPassengersCount=1&seniorPassengersCount=0&fareType=USD&passengerType=ADULT&tripType=roundtrip&promoCode=&reset=true&redirectToVision=true&int=HOMEQBOMAIR&leapfrogRequest=true'}>Purchase✈️</a></Button3>
    
    </DivContainer>
  )
}

export default Purchase

"https://www.southwest.com/air/booking/select.html?originationAirportCode=LAX&destinationAirportCode=PHL&returnAirportCode=&departureDate=${props.leave}&departureTimeOfDay=ALL_DAY&returnDate=2018-10-15&returnTimeOfDay=ALL_DAY&adultPassengersCount=1&seniorPassengersCount=0&fareType=USD&passengerType=ADULT&tripType=roundtrip&promoCode=&reset=true&redirectToVision=true&int=HOMEQBOMAIR&leapfrogRequest=true"