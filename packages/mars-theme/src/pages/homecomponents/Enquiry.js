import { styled } from 'frontity';
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import demo from '../images/demo.png';
import l1 from "../images/line1.png";
import l2 from "../images/line2.png";
import l3 from "../images/line3.png";
import tick from "../images/tick.png";
import dots from "../images/dotss.png";
function Enquiry() {
  return (
    <Wrapper fluid>
        {/* top lines */}
        <div
        style={{
          position: "absolute",
          right: "0",
          top: "-26px",
          width: "auto",
          height: "auto",
          transform: "matrix(-1, 0, 0, 1, 0, 0)",
        }}
      >
        <img
          src={l1}
          alt=""
          style={{
            width: "33px",
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
            width: "72px",
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
            width: "71px",
            height: "auto",
            objectFit: "cover",
            position: "absolute",
            left: "83%",
            top: "71%",
            transform: "translate(-1%,-8%)",
          }}
        />
      </div>
      {/* dots */}
      <Div>
        <Image1 src={dots} alt="" />
      </Div>
        <Row1>
            <Col1>
            <Row >
                <SPAN2>
                Get a Live FREE Demo
                </SPAN2>
                <br />
                    <UL>
                        <LI>Check the popular and niche learning maps and courses</LI>
                        <LI>Find out about the tuition cost, payment options, and scholarships </LI>
                        <LI>Get access to self-paced learning videos and webinars</LI>
                    </UL>
            </Row>
            <Image src={demo} alt="" />
            </Col1>
            <Col2>
            <Row2>
                <Row3>
                    <SPAN1>Quick Enquiry</SPAN1>
                    <br />
                    <Input type="text" placeholder='Name'/>
                    <Input type="email" placeholder='Course'/>
                    <Input type="email" placeholder='Email'/>
                    <Input type="email" placeholder='Phone number'/>
                    <Row4><Buttons variant='warning'>Submit</Buttons></Row4>
                    
                </Row3>
                
            </Row2>
            </Col2>
        </Row1>
    </Wrapper>
  )
}

export default Enquiry;

const Wrapper =styled(Container)`
min-height:531px;
background: #FFFCF7;
margin-top:10rem;
position:relative;
`;
const Row1 = styled(Row)`
display:flex;
flex-wrap:wrap;



`;
const Row2 =styled(Row)`
border-top:6px solid #FCAF17;
margin-top:3rem;
width:385px;
min-height:493px;
background: #FFFFFF;
box-shadow: 0px 14px 59px rgba(236, 228, 214, 0.62);
border-radius: 2px;

@media(max-width:1350px){
    width:700px;
}

`;
const Row3 = styled(Row)`
display:flex;
justify-content:center;
// max-width:349px;
`; 
const Row4 = styled(Row)`
display:flex;
justify-content:center;



`; 

const Col1 = styled(Col)`
flex:2 1 924px ;
position:relative;
max-width:934px;


`;
const Col2 = styled(Col)`
// flex:1 1  ;
// display:flex;
// justify-content:center;
@media(max-width:1350px){
    display:flex;
    justify-content:center;
}



`;
const Div = styled.div`
position:absolute;
width:96px;
height:81px;
bottom:38%;
right:1%;
@media(max-width:1350px){
   display:none;

}
`;
// image
const Image = styled.img`
position:absolute;
top:-15%;
width:924px;
@media(max-width:1350px){
    width:100%;
position:relative;

}
`;
const Image1 = styled.img`
position:absolute;

// @media(max-width:1350px){
//     width:100%;
// position:relative;

// }
`;
// span
const SPAN1 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
/* identical to box height, or 120% */
color: #303030;
text-align:center;
padding-top:25px;
`;
const SPAN2 = styled.span`

font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 48px;
/* identical to box height, or 150% */
// text-align:center;
padding-left:5rem;
margin-top:3rem;

color: #303030;
@media(max-width:550px){
padding-left:2rem;

}
`;
const UL =styled.ul`
max-width:400px;
list-style:none;

padding-left:6rem;
// list-style-image: url(${tick});

@media(max-width:550px){
    padding-left:2rem;
    
    }

`;
const LI =styled.li`
list-style-position: inside;
position: relative;
// width:330px
padding-left: 20px;
list
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 26px;
/* or 162% */

color: #7A7A7A;
&::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: black;
    top: 10px;
    left: -5px;
    background-image: url(${tick});
}
}

`;
// input 
const Input = styled.input`
width:342px;
border:none;
border-bottom:1px solid #B7B7B7;
&:focus{
border-bottom:1px solid #FCAF17;

}
`;
// btn
const Buttons = styled(Button)`
width:161px;
height:48px;
border:none;
border-radius:0;
background-color:#FCAF17;
margin-top:20px;
box-shadow: 0px 34px 30px -21px rgba(217, 211, 209, 0.45);
`;
