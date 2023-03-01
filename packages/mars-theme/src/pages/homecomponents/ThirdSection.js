import { css, styled } from "frontity";
import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import l1 from "../images/line1.png";
import l2 from "../images/line2.png";
import l3 from "../images/line3.png";
import p1 from "../images/Ellipse 93.png";
import p2 from "../images/p1.png";
import p3 from "../images/Ellipse 114.png";
import p4 from "../images/p2.png";
import p5 from "../images/p5.png";

function ThirdSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  return (
    <Container fluid style={{position:"relative",minHeight:"707px",marginTop:"10rem"}}>
        {/* lines edge bottom*/}
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "89px",
            width: "auto",
            height: "auto",
          }}
        >
          <img
            src={l1}
            alt=""
            style={{
              width: "35px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "57%",
              top: "78%",
              transform: "translate(-1%,-60%)",
            }}
          />
          <img
            src={l2}
            alt=""
            style={{
              width: "74px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "72%",
              top: "75%",
              transform: "translate(-1%,-33%)",
            }}
          />
          <img
            src={l3}
            alt=""
            style={{
              width: "74px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "83%",
              top: "71%",
              transform: "translate(-1%,-8%)",

            }}
          />
        </div>
        {/* lines edge top*/}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "89px",
            width: "auto",
            height: "auto",
            transform: "matrix(-1, 0, 0, 1, 0, 0)"
            
          }}
        >
          <img
            src={l1}
            alt=""
            style={{
              width: "35px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "57%",
              top: "78%",
              transform: "translate(-1%,-60%)",
            }}
          />
          <img
            src={l2}
            alt=""
            style={{
              width: "74px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "72%",
              top: "75%",
              transform: "translate(-1%,-33%)",
            }}
          />
          <img
            src={l3}
            alt=""
            style={{
              width: "74px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "83%",
              top: "71%",
              transform: "translate(-1%,-8%)",
            }}
          />
        </div>
      <Row style={{ marginTop: "50px", overflow: "hidden" ,width:"90%",marginLeft:"auto",
          marginRight:"auto",}}>
        <SPAN1>Upgrade your skills in the industry of the future</SPAN1>
        <br />
        <SPAN2>
          If you are pursuing a career in technology, it is high time to update
          your skills and prepare for your next opportunity.
        </SPAN2>
      </Row>
      <Row
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "7rem",
          marginLeft:"auto",
          marginRight:"auto",
          width:"90%"
        //   justifyContent:"center"
        }}
      >
        <Col>
          <Row>
            <Cols
            
              style={{
                height: "282.98px",
                width: "378.35px",
                padding:"60px 40px 40px 40px",
                position:"relative",
              }}

            >
                <Div1 >
                    {/* <Image src={p1} alt="" /> */}
                    <SPAN5></SPAN5>
                    <Image1 src={p2} alt="" />

                </Div1>

                <SPAN3>
                Airtics Education is the next evolution of online learning from the prestigious Westford Education Group. We offer the top IT certification programs, ideal for working professionals and fresh graduates to help them advance in those fields. 

                </SPAN3>
            </Cols>
          </Row>
        </Col>
        {/* col2 */}
        <Col>
          <Row>
            <Cols
              style={{
                height: "282.98px",
                width: "378.35px",
                padding:"60px 40px 40px 40px",
                position:"relative"

              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
        
            >
                <Div1 >
                <SPAN4 style={{background:isHovered ? "black" : ""}}></SPAN4>

                    <Image1 src={p4} alt="" />

                </Div1>
                <SPAN3>We've combined cutting-edge material with the best online technology and instructional design to improve learning outcomes while encouraging engagement and collaboration.</SPAN3>
            </Cols>
          </Row>
        </Col>
        {/* col3 */}
        <Col>
          <Row>
            <Cols
              style={{
                height: "282.98px",
                width: "378.35px",

                padding:"60px 40px 40px 40px",
                position:"relative"
              }}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
        
            >
                <Div1>
                <SPAN4 style={{background:isHovered2 ? "black" : ""}}></SPAN4>

                    <Image1 src={p5} alt="" />

                </Div1>
                <SPAN3>We've combined cutting-edge material with the best online technology and instructional design to improve learning outcomes while encouraging engagement and collaboration.</SPAN3>
            </Cols>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ThirdSection;

// CSS
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 48px;
//   margin-left: 50px;
  z-index:1;

  color: #303030;
`;

const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 28px;
//   margin-left: 50px;
  margin-top: 30px;
  width: 608px;
  z-index:1;

  color: #303030;
`;
const SPAN3 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
// z-index:1;

line-height: 28px;
/* or 175% */


color: #303030;

`;
// div
const Div1 =styled.div`
position:absolute;
top:-28%;
left:5%;
&:hover{
  background:black;
}


`;
// image
const Image =styled.img`
position:absolute;
top:50%;
left:50%

`;
const Image1 =styled.img`
position:absolute;
top:50%;
// left:50%
transform:translate(51px, 38px);


`;

const DivCol = styled.div`
@media (max-width: 500px) {
    margin-top:70px;
}


`;
const SPAN4 =styled.span`
width:119.72px;
height:119.72px;
background-color: #fff;
color:yellow;
border-radius: 50%;
display: inline-block;
transform: translate(15px, -4px);
position:absolute;
top:50%;
left:50%
cursor:pointer;
box-shadow: 0px 30px 18px -2px rgba(203, 203, 203, 0.14);

&:hover{
  background-color: black;

}

`;

const SPAN5 =styled.span`
width:119.72px;
height:119.72px;
background-color: black;
color:yellow;
border-radius: 50%;
display: inline-block;
transform: translate(15px, -4px);
position:absolute;
top:50%;
left:50%
cursor:pointer;
box-shadow: 0px 30px 18px -2px rgba(203, 203, 203, 0.14);


&:hover{
  background-color: black;

}

`;
const Cols = styled(Col)`
background:#fff;
cursor:pointer;

&:hover{
  background:#FCAF17;
  box-shadow: 0px 28px 61px rgba(222, 177, 87, 0.51);

}
@media(max-width:480px){
  margin-top:5rem;
}
`
