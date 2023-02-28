import { styled } from "frontity";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import img1 from "../images/man.png";
import circleone from "../images/Ellipse 89.png";
import circletwo from "../images/Ellipse 88.png";
import circlethree from "../images/Ellipse 87.png";
import l1 from "../images/line1.png";
import l2 from "../images/line2.png";
import l3 from "../images/line3.png";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import s1 from "../images/s1.png";
import arrow from "../images/Vector.png";
import play from "../images/Group 997.png";
import rating from "../images/star 2.png";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Auxcollabration from "./Auxcollabration";
import KeyFeatures from "./KeyFeatures";
import Enrol from "./Enrol";


function FirstSection() {
  // const mobile = innerWidth <750;

  return (
    <Firstsectionwrapper>
      <div style={{ position: "relative" }}>
        <NavBar />
        {/* top circles */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "400px",
            height: "300px",
            left: "",
          }}
        >
          <img
            src={circleone}
            alt=""
            style={{
              width: "343px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "57%",
              top: "78%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <img
            src={circletwo}
            alt=""
            style={{
              width: "228px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "72%",
              top: "75%",
              transform: "translate(-50%,-50%)",
            }}
          />
          <img
            src={circlethree}
            alt=""
            style={{
              width: "139px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "83%",
              top: "71%",
              transform: "translate(-50%,-50%)",
            }}
          />
        </div>
        {/* bottom lines */}
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "137px",
            width: "auto",
            height: "auto",
            right: "",
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
              width: "84px",
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
              width: "84px",
              height: "auto",
              objectFit: "cover",
              position: "absolute",
              left: "83%",
              top: "71%",
              transform: "translate(-1%,-8%)",
            }}
          />
        </div>
        <Row
          style={{
            display: "flex",
            // position: "relative",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          <Col style={{ flex: " 1" }}>
            <Row>
              <SPAN>
                Upgrade your <span style={{ color: "#FCAF17" }}>Skills</span>
                <br /> in the industry of the
                 Future
              </SPAN>
            </Row>
            <Row>
              <Paragraph>
                If you are pursuing a career in technology, it is high time to
                update your skills and prepare for your next opportunity.
              </Paragraph>
            </Row>
            <Div3
              style={{
                display: "flex",
                justifyItems: "center",
                marginTop: "5%",
              }}
            >
              <Col1
              >
                <Button
                  variant="dark"
                  style={{
                    borderRadius: "0",
                    color: "#FCAF17",
                    width: "168px",
                    minHeight: "68px",
                    fontFamily: "mons",
                    marginTop: "20px",
                  }}
                >
                  Get Started{" "}
                  <img src={arrow} alt="" width="27" height="13px" />
                </Button>
                <Col
                  style={{
                    width: "",
                    display: "flex",
                    justifyItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={play} alt="" />
                  <Word>How it Works</Word>
                </Col>
              </Col1>
            </Div3>
          </Col>
          <Col>
            <div
              style={{
                zIndex: "113",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Images
                src={img1}
                alt=""
                style={{
                  // width:"764px",
                  // height: "525px",
                  // left: "676px",
                  objectFit: "contain",
                  zIndex: "12",
                  opacity: "1",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          style={{
            display: "flex",
            backgroundColor: "#FFFCF6",
            minHeight: "257px",
            marginTop: "15rem",
            position: "relative",
            justifyContent: "center",
            
          }}
        >
          {/* arranging to top */}
          <Div5
            style={{
              width: "1187px",              
              overflow:"hidden",
              // height: "167px",
              // bottom: "67%",
              top: "-29%",
              backgroundColor: "#ffffff",
              borderRadius: "3px",
              boxShadow: "0px 9px 29px -8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Col style={{ padding: "30px" }}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "-150px",
                  margin:"10px"
                  // position:"relative"
                }}
              >
                <Col>
                  <StudentImage src={s1} />
                </Col>
                <Col style={{ flex: "3 1" }}>
                  <SPAN3>
                    A total beginner in coding, this course was the perfect
                    start! It was easy to understand, and easy to program
                    (coding wit already?)
                    <br />
                    <strong>Rachel Cave - </strong>Ex Student
                  </SPAN3>
                </Col>
              </Row>
            </Col>
            <Col style={{ display: "flex" }}>
              <Col style={{ justifyContent: "center", padding: "10px 10px" }}>
                <Bold>35</Bold>
                <br />
                <SPAN3>Online Courses</SPAN3>
              </Col>
              <Divider1 />
              <Col style={{ justifyContent: "center", padding: "10px 10px" }}>
                <Bold>5k</Bold>
                <br />
                <SPAN3>Students</SPAN3>
              </Col>
              <Divider1 />
              <Col style={{ justifyContent: "center", padding: "10px 10px" }}>
                <Bold>
                  4.5 <img src={rating} alt="" />
                </Bold>
                <br />
                <SPAN3>Rating</SPAN3>
              </Col>
            </Col>
          </Div5>
          {/* motivation */}
          <Row style={{width:"1189px"}}>
          <Col
            style={{
              display: "flex",
              // justifyContent: "center",
           
            }}
          >
            <Div4>
              <img src={m1} alt="" />
            </Div4>
            <SPAN2>
              We'll define, <strong>You'll LEARN</strong>{" "}
            </SPAN2>
          </Col>
          <Divider></Divider>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            {/* <Row> */}
              <Div4>
                <img src={m2} alt="" />
              </Div4>
              <SPAN2>
                We'll exhibit, <strong>you'll REMEMBER</strong>{" "}
              </SPAN2>
            {/* </Row> */}
          </Col>
          <Divider></Divider>

          <Col style={{ display: "flex", justifyContent: "center" }}>
            <Div4>
              <img src={m3} alt="" />
            </Div4>
            <SPAN2>
              We'll motivate <strong> you'll PERFORM</strong>{" "}
            </SPAN2>
          </Col>
          </Row>
        </Row>
      </div>
      {/* second */}
      <div>
        <SecondSection />
      </div>
      {/* third */}
      <div>
        <ThirdSection />
      </div>
      {/* fourth */}
      <div>
        <Auxcollabration />
      </div>
      <div>
        <KeyFeatures />
      </div>
      <div>
        <Enrol />
      </div>
    </Firstsectionwrapper>
  );
}

export default FirstSection;

// css

const Firstsectionwrapper = styled.div`
  background-color: #faf5ed;
  min-height: 732px;
  // width: 1439px;
  left: 1px;
  top: 732px;
  border-radius: 0px;
  //   position:relative;
`;
const Col1 = styled(Col)`

  width: 100%;
  display: flex;
  justifyItems: center;
  gap:50px;
  @media (max-width: 480px) {
  flex-direction:column;
    
     }
}}
`;
const Div3 = styled.div`
  margin-left: 6.7rem;
  @media (max-width: 560px) {
   margin-left:4rem;
    }
`;
// images

const Images = styled.img`
  width:764px;
  max-width: "100%";
  // display:none;

  @media (max-width: 560px) {
  width:100%;

    max-width: "100%";
    // background-color: blue;
  }
`;

const StudentImage = styled.img`
  width: 120px;
  height: 104px;
  // padding:-20px 0
`;
const Word = styled.p`
  position: relative;
  // margin-left: 2rem;
  // right: 60.28%;
  top: 36.38%;
  // bottom: 94.36%;

  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  color: #303030;
`;

const Paragraph = styled.p`
  height: 96px;
  width: 592px;
  // left: 117px;
  // top: 521px;
  padding-left: 6.8rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-radius: null;

  position: relative;
  //   left: 15.52%;
  // right: 52.85%;
  top: 9.12%;
  bottom: 95.12%;

  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  text-transform: capitalize;

  color: #303030;

  @media (max-width: 650px) {
    padding-left: 5rem;
    padding-bottom: 5.5rem;
  }
`;
// span
const SPAN = styled.span`
  position: relative;
  // display:flex;
  // justify-content:center;

  //   margin-bottom:50px;

  // border-radius: null;
  padding-left: 6.7rem;
  padding-top: 3rem;

  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 80px;
  /* or 125% */

  color: #303030;

  @media (max-width: 650px) {
    padding-left: 5rem;
  }
`;

const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  margin-top: 10rem;
  // display:flex;
  // gap:120px;

  // padding-top:120px;
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  // margin-top:10rem;
  // display:flex;
  // gap:120px;

  // padding-top:120px;
`;

const Divider = styled.div`
  width: 10px; 
  border-right: 2px solid black;
  height: 30%;
  margin-top: 150px;
  // position: absolute;
  // padding-left: 10px;

  @media (max-width: 500px) {
    // flex-direction:column;
    display:none;
    // margin-bottom:10rem;
    // position:relative;
  }
`;
const Divider1 = styled.div`
  width: 1px; /* Line width */
  border-right: 2px solid #303030;
  height: 60%;
  margin-top: 28px;
  // position: absolute;
  // padding-left: 10px;
`;
// bold text
const Bold = styled.strong`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 80px;
  /* identical to box height, or 200% */

  color: #303030;
`;
const Div4 = styled.div`
  margin-top: 9rem;
`;
const Div5 = styled.div`
  display:flex;
  position:absolute;

  @media (max-width: 860px) {
    flex-direction:column;
    // margin-bottom:10rem;
    position:relative;
  }
`;

