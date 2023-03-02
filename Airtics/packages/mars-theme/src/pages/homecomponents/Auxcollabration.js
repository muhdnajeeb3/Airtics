import { styled } from 'frontity';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import p1 from "../images/certificate1.png";
import p2 from "../images/certificate2.png";
import dots from "../images/dots.png";
import line from "../images/left line.png";
function Auxcollabration() {
  return (
    <Container fluid style={{borderLeft: "9px solid #FCAF17",marginTop:"5rem"}}>
        {/* <div style={{marginTop:"50px"}}>
                <img src={line} alt="" />
        </div> */}
        <Row style={{display:"flex",width:"90%",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",position:"relative"}}>
            <Div1>
                <img src={dots} alt="" />
            </Div1>
            
            <Col style={{ flex:"2",zIndex:"1"}}>
            <Row >
                <SPAN1>Programs offered in collaboration with AUX</SPAN1>
                <br />
                <SPAN2>
                Airtics joins with Acacia University, USA, and all the programs are certified under AUX, an extension of Acacia University. 
                </SPAN2>
            </Row>
            </Col>
            <Col1 style={{zIndex:"1"}}>
            <div>
                <Image src={p1}/>
            </div>
            </Col1>
            <Col1 style={{zIndex:"1"}}>
            <div>
                <Image src={p2}/>
            </div>
            </Col1>
        </Row>
    </Container>
  )
}

export default Auxcollabration;

// css
const SPAN1 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 38px;
line-height: 48px;
color: #303030;

`;
const SPAN2 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #303030;

`;

const Image =styled.img`
width:348px;
height:248px;
filter: drop-shadow(0px 2px 32px rgba(218, 218, 218, 0.48))
object-fit:contain;
// width:100%;
z-index:1;
@media (max-width:700px){
    // width:100%;
    // object-fit:cover;
}
`;

const Div1 =styled.div`
position:absolute;
top:0;
right:0;
// bottom:0;

`;
const Col1 =styled(Col)`
@media(max-width:400px){
    display:flex;
justify-content:center;
}

`;

