import { css, styled } from "frontity";
import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import CardSlider from "./CardSlider";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ReactPlayer from "react-player";
import media from '../images/media.png';

function DemoClass() {
    const videos = [
        {
          url: "",
          title: "Never  Give You Up"
        },
        {
          url: "",
          title: "Tunak Tunak Tun"
        },
        {
          url: "",
          title: "Nyan Cat"
        }
        ,
        {
          url: "",
          title: "Nyan Cat"
        },
        {
          url: "",
          title: "Nyan Cat"
        }
      ];
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.2,
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
    <Wrapper>
      <Row1>
        <SPAN1>Our Demo Classes</SPAN1>
      </Row1>
      <Row>
        {/* <CardSlider /> */}
        <Sliderwrapper {...settings}>
        {videos.map((video, index) => (
        <Cards key={index}>
          <ReactPlayer url={video.url} style={{width:'18rem'}} />
          <Div1>
            <Image src={media}/>
            <br />
            <SPAN2>Learn Data Analytics</SPAN2>
          </Div1>
        </Cards>
      ))}
        </Sliderwrapper>
      </Row>
    </Wrapper>
  );
}

export default DemoClass;
// css
const Wrapper = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;
const Sliderwrapper = styled(Slider)`
  .slick-slide {
    margin: 10px 7px;
  }
  .slick-track {
    display: flex;
  }
  /* the parent */
  //   .slick-list {
  //     margin: 0 -27px;
  //   }
`;
const Row1 = styled(Row)``;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 48px;
  margin-bottom:26px;
  /* identical to box height, or 126% */

  color: #303030;
`;
// card
const Cards = styled(Card)`
  width: 18rem;
  border-radius: 0;
  min-height: 358px;
  position:relative;
  background: linear-gradient(0deg, #000000 -2.79%, rgba(217, 217, 217, 0) 100%);

`;

const Div1 = styled.div`
position:absolute;
bottom:47px;
left:30px;

`;
const SPAN2 = styled.span`
font-family: 'Metropolis';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 28px;
/* identical to box height, or 175% */


color: #ffffff;

`;
const Image = styled.img`

`;
