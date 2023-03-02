import { css, styled } from "frontity";
import React from "react";
import { Container, Row,Card,Col } from "react-bootstrap";
import Slider from "react-slick";
import amzn from "../images/amz.png";
import wstfrd from "../images/wstfrd.png";
import sms from "../images/image 14.png";
import emarites from "../images/image 11.png";
import Nbd from "../images/image 15.png";
import study from "../images/study.png";
import clocktime from "../images/clock.png";
import learning from "../images/learning.png";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

function CardSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    // arrows: false,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <Wrapper fluid>
      <Row2>
        <Sliderwrapper {...settings}>
        <Card
            style={{ width: "18rem",borderRadius:"0px"}}
            css={css`
              border-radius:0
            `}
          >
            <Card.Img variant="top" src={study} css={css`padding:10px`}/>
            <Card.Body>
              <Card.Title>
                <SPAN1>Advanced Program In Data Analytics
                 
                </SPAN1>
              </Card.Title>
              <Divider />
              <Card.Text>
                <Row>
                  <Col>
                    <SPAN2>Next Course starts
                    <br />
                  <span css={css`color:#FCAF17`}>29 Apr, 2022</span></SPAN2>
                  </Col>
                  <Col style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                  <SPAN3>
                  $1500
                  </SPAN3>
                  </Col>
                </Row>

                 <Row css={css`margin-top:10px`}>
                  <Col>
                  <Row>
                    <Image3 src={clocktime} alt="" />
                  </Row>
                  
                  </Col>
                  <Col>
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image4 src={learning} alt="" />
                  </Row>
                 
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem",borderRadius:"0px"}}
            css={css`
              border-radius:0
            `}
          >
            <Card.Img variant="top" src={study} css={css`padding:10px`}/>
            <Card.Body>
              <Card.Title>
                <SPAN1>Advanced Program In Data Analytics
                 
                </SPAN1>
              </Card.Title>
              <Divider />
              <Card.Text>
                <Row>
                  <Col>
                    <SPAN2>Next Course starts
                    <br />
                  <span css={css`color:#FCAF17`}>29 Apr, 2022</span></SPAN2>
                  </Col>
                  <Col style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                  <SPAN3>
                  $1500
                  </SPAN3>
                  </Col>
                </Row>

                 <Row css={css`margin-top:10px`}>
                  <Col>
                  <Row>
                    <Image3 src={clocktime} alt="" />
                  </Row>
                  
                  </Col>
                  <Col>
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image4 src={learning} alt="" />
                  </Row>
                 
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem",borderRadius:"0px"}}
            css={css`
              border-radius:0
            `}
          >
            <Card.Img variant="top" src={study} css={css`padding:10px`}/>
            <Card.Body>
              <Card.Title>
                <SPAN1>Advanced Program In Data Analytics
                 
                </SPAN1>
              </Card.Title>
              <Divider />
              <Card.Text>
                <Row>
                  <Col>
                    <SPAN2>Next Course starts
                    <br />
                  <span css={css`color:#FCAF17`}>29 Apr, 2022</span></SPAN2>
                  </Col>
                  <Col style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                  <SPAN3>
                  $1500
                  </SPAN3>
                  </Col>
                </Row>

                 <Row css={css`margin-top:10px`}>
                  <Col>
                  <Row>
                    <Image3 src={clocktime} alt="" />
                  </Row>
                  
                  </Col>
                  <Col>
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image4 src={learning} alt="" />
                  </Row>
                 
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card><Card
            style={{ width: "18rem",borderRadius:"0px"}}
            css={css`
              border-radius:0
            `}
          >
            <Card.Img variant="top" src={study} css={css`padding:10px`}/>
            <Card.Body>
              <Card.Title>
                <SPAN1>Advanced Program In Data Analytics
                 
                </SPAN1>
              </Card.Title>
              <Divider />
              <Card.Text>
                <Row>
                  <Col>
                    <SPAN2>Next Course starts
                    <br />
                  <span css={css`color:#FCAF17`}>29 Apr, 2022</span></SPAN2>
                  </Col>
                  <Col style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                  <SPAN3>
                  $1500
                  </SPAN3>
                  </Col>
                </Row>

                 <Row css={css`margin-top:10px`}>
                  <Col>
                  <Row>
                    <Image3 src={clocktime} alt="" />
                  </Row>
                  
                  </Col>
                  <Col>
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image4 src={learning} alt="" />
                  </Row>
                 
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card><Card
            style={{ width: "18rem",borderRadius:"0px"}}
            css={css`
              border-radius:0
            `}
          >
            <Card.Img variant="top" src={study} css={css`padding:10px`}/>
            <Card.Body>
              <Card.Title>
                <SPAN1>Advanced Program In Data Analytics
                 
                </SPAN1>
              </Card.Title>
              <Divider />
              <Card.Text>
                <Row>
                  <Col>
                    <SPAN2>Next Course starts
                    <br />
                  <span css={css`color:#FCAF17`}>29 Apr, 2022</span></SPAN2>
                  </Col>
                  <Col style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                  <SPAN3>
                  $1500
                  </SPAN3>
                  </Col>
                </Row>

                 <Row css={css`margin-top:10px`}>
                  <Col>
                  <Row>
                    <Image3 src={clocktime} alt="" />
                  </Row>
                  
                  </Col>
                  <Col>
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image4 src={learning} alt="" />
                  </Row>
                 
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
          
          
        </Sliderwrapper>
      </Row2>
    </Wrapper>
  );
}

export default CardSlider;
const Row1 = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Row2 = styled(Row)`
  // display:flex;
  // justify-content:center;
  // align-items:center;
  // text-align:center;
  margin-top: 3rem;
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  color: #000000;
`;
const Wrapper = styled(Container)`
  margin-top: 4rem;
`;
const Div = styled.div`
  width: 231px;
  height: 110px;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 15px;
`;
const Div2 = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 63%);
`;
const Image1 = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 36%);
`;

const Sliderwrapper = styled(Slider)`
  .slick-slide {
    margin: 10px 7px;
  }
  .slick-track {display:flex;}
  /* the parent */
//   .slick-list {
//     margin: 0 -27px;
//   }
`;
const Divider = styled.hr`
  width: 100%;
`;

const SPAN2 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 21px;
/* or 150% */
color: #303030;

text-transform: capitalize;

color: #303030;
`;
const SPAN3 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 700;
width:50px;
height:26px
font-size: 18px;
line-height: 26px;
/* identical to box height, or 162% */

text-transform: capitalize;

color: #303030;
`;
// img
const Image3 =styled.img`
width:102px;
height:34px;
`;

const Image4 =styled.img`
width:134px;
height:32px;
`;
