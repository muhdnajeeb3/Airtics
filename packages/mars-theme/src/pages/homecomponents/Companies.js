import { styled } from "frontity";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import amzn from "../images/amz.png";
import wstfrd from "../images/wstfrd.png";
import sms from "../images/image 14.png";
import emarites from "../images/image 11.png";
import Nbd from "../images/image 15.png";

function Companies() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
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
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
  };
  return (
    <Wrapper fluid>
      <Row1>
        <SPAN1>Companies where our learners work</SPAN1>
      </Row1>
      <Row2>
        <Sliderwrapper {...settings}>
          <Div>
            <Div2>
              <Image src={amzn} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image1 src={wstfrd} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image1 src={sms} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image1 src={emarites} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image src={Nbd} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image src={amzn} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image1 src={wstfrd} />
            </Div2>
          </Div>
          <Div>
            <Div2>
              <Image src={amzn} />
            </Div2>
          </Div>
          <Div>
            <Div2>
                <Image1 src={wstfrd}/>
            </Div2>
          </Div>
        </Sliderwrapper>
      </Row2>
    </Wrapper>
  );
}

export default Companies;
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
  font-size: 38px;
  line-height: 48px;
  /* identical to box height, or 126% */

  color: #303030;
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
