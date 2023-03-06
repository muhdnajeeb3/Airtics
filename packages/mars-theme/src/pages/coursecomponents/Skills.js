import { styled } from "frontity";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ML from "../courseimages/ML.png";
import DL from "../courseimages/DL.png";
import NLP from "../courseimages/NLP.png";
import RL from "../courseimages/RL.png";
import NN from "../courseimages/NN.png";
import tick from "../courseimages/roundtick.png";
import tool from "../courseimages/tool.png";
import python from "../courseimages/python.png";

function Skills() {
  return (
    <>
      <Wrapper>
        <Row1>
          <SPAN1>Skills Covered</SPAN1>
        </Row1>
        <Row2>
          <Col1>
            <Image src={ML} />
            <SPAN2>Machine Learning</SPAN2>
          </Col1>
          <Col1>
            <Image src={DL} />
            <SPAN2>Deep Learning</SPAN2>
          </Col1>
          <Col1>
            <Image src={NLP} />
            <SPAN2>Natural Language Processing</SPAN2>
          </Col1>
          <Col1>
            <Image src={RL} />
            <SPAN2>Reinforcement Learning</SPAN2>
          </Col1>
          <Col1>
            <Image src={ML} />
            <SPAN2>Computer Vision</SPAN2>
          </Col1>
          <Col1>
            <Image src={NN} />
            <SPAN2>Neural Network</SPAN2>
          </Col1>
        </Row2>
      </Wrapper>
      <Wrapper2 fluid>
        <Row3>
          <Col2>
            <Row4>
              <SPAN3>
                Who Can <SPAN4>Apply for the Course?</SPAN4>
              </SPAN3>
              <br />
              <Row4>
                <SPAN5>
                  <Image1 src={tick} alt="" /> Individuals with a bachelor’s
                  degree and a keen interest to learn AI and Data Science
                </SPAN5>

                <SPAN5>
                  <Image1 src={tick} alt="" /> IT professionals looking for a
                  career transition as Data Scientists and Artificial
                  Intelligence Engineers
                </SPAN5>
                <SPAN5>
                  <Image1 src={tick} alt="" />
                  Professionals aiming to move ahead in their IT career
                </SPAN5>
                <SPAN5>
                  <Image1 src={tick} alt="" /> Artificial Intelligence and
                  Business Intelligence professionals
                </SPAN5>
                <SPAN5>
                  <Image1 src={tick} alt="" /> Developers and Project Managers
                </SPAN5>
                <SPAN5>
                  <Image1 src={tick} alt="" /> Freshers who aspire to build
                  their career in the field of Artificial Intelligence and Data
                  Science
                </SPAN5>
              </Row4>
            </Row4>
          </Col2>
          <Col3></Col3>
        </Row3>
      </Wrapper2>
      <Wrapper3 fluid>
        <Row5>
          <SPAN6>Tools/ Frameworks/ Libraries</SPAN6>
        </Row5>
        <Row6>
          <Col>
            <Div1>
              <div style={{position:"relative"}}>
                <Image2 src={tool} alt="" />
                <span style={{position:"absolute", marginLeft:"2rem"}}>Scripting tools</span>
                <img src={python} style={{position:"absolute", top:"60px"}}/>
              </div>
            </Div1>
            <Div1>
              <div style={{position:"relative"}}>
                <Image2 src={tool} alt="" />
                <span style={{position:"absolute", marginLeft:"2rem"}}>IDE shell</span>
                <img src={python} style={{position:"absolute", top:"60px"}}/>
              </div>
            </Div1>
            <Div1>
              <div style={{position:"relative"}}>
                <Image2 src={tool} alt="" />
                <span style={{position:"absolute", marginLeft:"2rem"}}>Database Integrations</span>
                <img src={python} style={{position:"absolute", top:"60px"}}/>
              </div>
            </Div1>
          </Col>
          <Col>
          <Div1>
              <div style={{position:"relative"}}>
                <Image2 src={tool} alt="" />
                <span style={{position:"absolute", marginLeft:"2rem"}}>Data science environment</span>
                <img src={python} style={{position:"absolute", top:"60px"}}/>
              </div>
            </Div1>
            <Div1>
              <div style={{position:"relative"}}>
                <Image2 src={tool} alt="" />
                <span style={{position:"absolute", marginLeft:"2rem"}}>Data Analytics Libraries</span>
                <img src={python} style={{position:"absolute", top:"60px"}}/>
              </div>
            </Div1>
            <Div1>
              <div style={{position:"relative"}}>
                <Image2 src={tool} alt="" />
                <span style={{position:"absolute", marginLeft:"2rem"}}>Automated Machine Learning Models</span>
                <img src={python} style={{position:"absolute", top:"60px"}}/>
              </div>
            </Div1>
          </Col>
        </Row6>
      </Wrapper3>
    </>
  );
}

export default Skills;
// css
const Wrapper = styled(Container)`
  background: #fbf9f8;
  min-height: 897px;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Wrapper2 = styled(Container)`
  background: #ffffff;
  min-height: 477px;
  position: relative;
  justify-content: center;
  display: flex;
`;
const Wrapper3 = styled(Container)`
  background: #ffffff;
  min-height: 477px;
  //   position: relative;
  //   justify-content: center;
  //   display: flex;
`;
const Row1 = styled(Row)`
  width: 93%;

  margin-left: auto;
  margin-right: auto;
`;
const Row2 = styled(Row)`
  margin-top: 3rem;
  display: flex;
  width: 93%;
  margin-bottom: 20rem;
  margin-left: auto;
  margin-right: auto;

  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 700px) {
    justify-content: center;
  }
`;
const Row3 = styled(Row)`
  width: 83%;
  min-height: 417.11px;
  background: #36374d;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: -26%;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const Row4 = styled(Row)``;
const Row5 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
`;
const Row6 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
`;
const Col1 = styled(Col)`
  min-width: 221.13px;
  max-width: 221.13px;
  height: 194.77px;
  background: #ffffff;
  box-shadow: 0px 12px 16px -6px rgba(208, 214, 222, 0.25);
  border-radius: 12px;
  position: relative;
  &:hover {
    background: #fcaf17;
  }
`;
const Col2 = styled(Col)`
  border-right: 3px solid #fcaf17;
  flex: 2;
`;
const Col3 = styled(Col)`
  flex: 1;
`;
const Div1 = styled.div`
margin-top:4rem;
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  margin-top: 3rem;
  text-transform: capitalize;

  color: #303030;
  @media (max-width: 700px) {
    text-align: center;
  }
`;
const SPAN2 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;
  text-transform: capitalize;
  width: 194px;
  color: #303030;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 73%);
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 200;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #ffffff;
`;
const SPAN4 = styled.span`
  font-weight: 700;
  font-size: 32px;
`;
const SPAN5 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 200;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */
  display: flex;
  gap: 10px;
  text-transform: capitalize;
  margin-top: 20px;

  color: #ffffff;
`;
const SPAN6 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #303030;
`;

// images
const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -98%);
`;
const Image1 = styled.img`
  min-width: 20.04px;
  min-height: 20.04px;
  max-width: 20.04px;
  max-height: 20.04px;
`;
const Image2 = styled.img`
  min-width: 49.82px;
  min-height: 82.46px;
  max-width: 49.82px;
  max-height: 82.46px;
  background-repeat: no-repeat;
`;
