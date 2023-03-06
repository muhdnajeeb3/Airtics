import {  css, styled } from 'frontity';
import React, { useEffect, useState } from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap'
import CardSlider from './CardSlider';
// import SliderCarousel from './Slider';

function SecondSection() {
  const [course1,setCourse1] = useState(false);
  const [course2,setCourse2] = useState(false);
  const [course3,setCourse3] = useState(false);

  const Courses1 = ()=> {
    setCourse1(true)
    setCourse2(false)
    setCourse3(false)
    
  }
  const Courses2 = ()=> {
    setCourse2(true)
    setCourse1(false)
    setCourse3(false)
    
  }
  const Courses3 = ()=> {
    setCourse3(true)
    setCourse2(false)
    setCourse1(false) 
  }

  return (
    <Container>
        <Row style={{marginTop:"4rem",marginBottom:"4rem"}} >
          <SPAN1>Our Courses</SPAN1>
        </Row>
        <Row1 >
          <Col>
        <Buttons variant='' onClick={Courses1} style={{background:course1 ? "#FCAF17" : "",boxShadow: course1 ? "0px 6px 18px rgba(231, 188, 119, 0.71)" : "",borderRadius:"0"}} ><SPAN2>Popular Courses</SPAN2></Buttons>
          </Col>
          <Col>
        <Buttons variant='' onClick={Courses2} style={{background:course2 ? "#FCAF17" : "",boxShadow: course2 ? "0px 6px 18px rgba(231, 188, 119, 0.71)" : "",borderRadius:"0"}} ><SPAN2>Mastering Programs</SPAN2></Buttons>
          </Col>
          <Col>
        <Buttons variant='' onClick={Courses3} style={{background:course3 ? "#FCAF17" : "",boxShadow: course3 ? "0px 6px 18px rgba(231, 188, 119, 0.71)" : "",borderRadius:"0"}} ><SPAN2>PG Programs</SPAN2></Buttons>
          </Col>
        </Row1>
        {/* <SliderCarousel /> */}
        <CardSlider />
    </Container>
  )
}

export default SecondSection;

// css
const Row1 = styled(Row)`
width: 98%;
display: flex;
margin-left: 1rem;
@media(max-width:480px){
  margin-left:0;
}

`;
const SPAN1 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 38px;
padding-left: 2rem;
line-height: 48px;
color: #303030;
`;
const SPAN2 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 26px;
color: #303030;
`;

const Buttons = styled(Button)`
background:#fff;
width:100%;
min-height:44px;
&:hover{
  color:green;
  background:#FCAF17;
  box-shadow: 0px 6px 18px rgba(231, 188, 119, 0.71);
}
@media(max-width:760px){
  margin-top:15px
}
@media(max-width:520px){
  min-height:64px;

}
`;
