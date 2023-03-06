import { styled } from 'frontity';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import certificate from '../courseimages/certificate.png'
function AboutAux() {
  return (
    <Wrapper fluid>
        <Row1>
            <Col1>
            <Row>

            <SPAN1>
            About Acacia University Extension (AUX)

            </SPAN1>
            <br />
            <SPAN2>
            AUX, an extension of the prestigious Acacia University, USA, has initiated various programs in partnership with Airtics Education. The wide range of programs aims to upskill millions of students in trending technologies through a blend of theoretical and hands-on knowledge and are taught by leading academicians.
            </SPAN2>
            </Row>

            <Row2>
                <Row3>
                    <SPAN3>
                    Upon completion of these programs, you will receive an Advanced Certification from AUX.
                    </SPAN3>

                </Row3>
            </Row2>
            </Col1>
            <Col2>
<Image src={certificate} alt="" />
            </Col2>
        </Row1>
    </Wrapper>
  )
}

export default AboutAux;
const Wrapper = styled(Container)`
background:#ffffff;
min-height:28rem;
`;
const Row1 = styled(Row)`
max-width:90%;
margin-left:auto;
// margin-right:auto;
display:flex;
margin-top:6rem;
@media(max-width:1368px){
margin-right:auto;
    
    }


`;
const Row2 = styled(Row)`
max-width:646.11px;

display:flex;
margin-top:2.5rem;
border-top:4px solid #FCAF17;
border-radius: 3px 3px 0px 0px;

`;
const Row3 = styled(Row)`
min-height:7.6rem;
margin-left:auto;
margin-right:auto;
display:flex;
padding-top:20px;
background: #FFFFFF;
box-shadow: 0px 10px 21px -5px rgba(196, 204, 214, 0.48);
border-radius: 3px;

`;
const Col1 = styled(Col)`
// flex:2;
`;
const Col2 = styled(Col)`
// flex:1;
@media(max-width:1368px){
margin-top:2rem;
}
`;
const SPAN1 =styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 40px;
text-transform: capitalize;

color: #303030;
`;

const SPAN2 =styled.span`
width:663.63px;
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */
margin-top:2rem;

text-transform: capitalize;

color: #303030;
`;

const SPAN3 =styled.span`
width:552.89px;
font-family: 'Metropolis';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* or 150% */

text-transform: capitalize;

color: #303030;
`;
// image

const Image = styled.img`
@media(max-width:768px){
    width:100%;
}
`;