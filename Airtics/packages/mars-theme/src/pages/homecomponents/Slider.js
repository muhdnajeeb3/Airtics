import { css, styled } from "frontity";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import study from "../images/study.png";
import clocktime from "../images/clock.png";
import learning from "../images/learning.png";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

function SliderCarousel() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.25,
    slidesToScroll: 4,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    initialSlide: 0,
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
    <>
      <div style={{ marginTop: "3rem" }}>
        <StyledSlider {...settings}>
          
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
                    <Image src={clocktime} alt="" />
                  </Row>
                  
                  </Col>
                  <Col>
                  <Row style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Image1 src={learning} alt="" />
                  </Row>
                 
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card> 
          
        </StyledSlider>
      </div>
    </>
  );
}

export default SliderCarousel;

const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* or 156% */

  color: #000000;
`;

const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: space-between;
  margin-left: 0 2rem;
  gap: 20rem;

  .slick-slide {
    margin: 10px 10px;
  }

  /* the parent */
  .slick-list {
    margin: 0 -27px;
  }
  .slick-list{
    padding:0 20% 0 0 !important;
  overflow:hidden;
}
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
const Image =styled.img`
width:102px;
height:34px;
`;

const Image1 =styled.img`
width:134px;
height:32px;
`;