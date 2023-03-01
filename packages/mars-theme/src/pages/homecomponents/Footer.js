import { styled } from "frontity";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import airtics from "../images/airtics.png";
function Footer() {
  return (
    <Wrapper fluid>
      <Row1>
        <Cols>
          <Div>
            <Image src={airtics} />
          </Div>
        </Cols>
        <Cols1>
          <Row2>
            <SPAN>Contact Us</SPAN>
            <br />
            <SPAN1>
              Airtics Education
              <br />
              7th Floor,City Gate Tower
              <br />
              Al Ittihad St,Sharjah,UAE
              <br />
              <br />
              info@airtics.org
              <br />
              <br />
              +971 56 788 7007
            </SPAN1>
            <br />
            <SPAN2>
              All rights reserved. Designed byWebCoffee Online Solutions
            </SPAN2>
          </Row2>
        </Cols1>
        <Cols2>
        <Row4>
        <SPAN3>Subscribe and never miss a post!</SPAN3>
        </Row4>
        <Row3>
            <Input type="email" placeholder="Your email"/>
            <Buttons variant='light'>Submit</Buttons>
        </Row3>
        <Row5>
            <SPAN4>
            *Subscribe to our newsletter and be the first to get notified about
            </SPAN4>
        </Row5>
        </Cols2>
      </Row1>
    </Wrapper>
  );
}

export default Footer;

// css
const Wrapper = styled(Container)`
  min-height: 394px;
  background: #31353a;
//   margin-top: 5rem;
`;
const Row1 = styled(Row)`
@media(max-width:830px){
    display:flex;
    flex-direction:column;
    padding-bottom:2rem;
}
`;
const Row2 = styled(Row)``;
const Row4 = styled(Row)`
margin-right:152px;`;
const Row5 = styled(Row)`
margin-right:62px;
width:440px;
@media(max-width:530px){
width:auto;

}
`;
const Row3 = styled(Row)`
width:500px;
margin-top:2rem;
display:flex;
gap:20px;
@media(max-width:530px){
flex-direction:column;
  justify-content: flex-start;
  width:auto;
  margin-right:6rem;
}
@media(max-width:420px){
    margin-right:1rem;

`;
const Cols = styled(Col)`
  display: flex;
  justify-content: center;
  @media(max-width:830px){
  justify-content: flex-start;

}

`;
const Cols1 = styled(Col)`
  display: flex;
  justify-content: center;
`;
const Cols2 = styled(Col)`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  @media(max-width:830px){
    margin-top:2rem;
  justify-content: flex-start;

}

`;
const Div = styled.div`
  width: 165.8px;
  height: 51.76px;
  margin-top: 4rem;
`;
const Image = styled.img``;
const SPAN = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  margin-top: 4rem;
  /* identical to box height, or 109% */

  color: #ffffff;
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  margin-top: 20px;
  /* or 171% */

  color: #ffffff;
`;
const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #ffffff;
`;
const SPAN3 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 24px;
/* identical to box height, or 109% */


color: #FFFFFF;
`;
const SPAN4 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
margin-top:2rem;
/* identical to box height, or 171% */


color: #FFFFFF;

`;
const Input = styled.input`
width:309px;
height:46px;
background: #FFFFFF;
border-radius: 11px;
`;
const Buttons =styled(Button)`
width:105px;
height:46px;
background: #FFFFFF;
border-radius: 11px;
`;