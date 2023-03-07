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
import ide from "../courseimages/ide.png";
import dse from "../courseimages/dse.png";
import dal from "../courseimages/dal.png";
import aml from "../courseimages/aml.png";
import stick1 from "../courseimages/stick.png";
import stick2 from "../courseimages/stick2.png";
import s3 from "../courseimages/s3.png";
import s4 from "../courseimages/s4.png";

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
              <div style={{ position: "relative" }}>
                <Image2 src={tool} alt="" />
                <SPAN7>Scripting tools</SPAN7>
                <Image4 src={python} />
              </div>
            </Div1>
            <Div1>
              <div style={{ position: "relative" }}>
                <Image2 src={tool} alt="" />
                <SPAN7>IDE shell</SPAN7>
                <Image4 src={ide} />
              </div>
            </Div1>
            <Div1>
              <div style={{ position: "relative" }}>
                <Image2 src={tool} alt="" />
                <SPAN7>Database Integrations</SPAN7>
                <Image4 src="" />
              </div>
            </Div1>
          </Col>
          <Col>
            <Div1>
              <div style={{ position: "relative" }}>
                <Image2 src={tool} alt="" />
                <SPAN7>Data science environment</SPAN7>
                <Image4 src={dse} style={{ maxWidth: "140px" }} />
              </div>
            </Div1>
            <Div1>
              <div style={{ position: "relative" }}>
                <Image2 src={tool} alt="" />
                <SPAN7>Data Analytics Libraries</SPAN7>
                <Image4 src={dal} />
              </div>
            </Div1>
            <Div1>
              <div style={{ position: "relative" }}>
                <Image2 src={tool} alt="" />
                <SPAN7>Automated Machine Learning Models</SPAN7>
                <Image4 src={aml} />
              </div>
            </Div1>
          </Col>
        </Row6>

        <Row7>
          <SPAN8>Application And Use Cases</SPAN8>
          <br />
          <Row9>
            <Col4>
              <SPAN10>Data Science in Sales And Marketing</SPAN10>
            </Col4>
            <Col>
              <Row8>
                <Div2>
                  <Image3 src={stick1} alt="" />
                </Div2>
                <SPAN9>Future sales prediction, Price optimization</SPAN9>
              </Row8>
            </Col>
          </Row9>
          <Row9>
            <Col4>
              <SPAN10>Data Science in Supply Chain & Logistics</SPAN10>
            </Col4>
            <Col>
              <Row8>
                <Div3>
                  <Image5 src={stick2} alt="" style={{ maxWidth: "10px" }} />
                </Div3>
                <SPAN9>Demand analytics</SPAN9>
              </Row8>
            </Col>
          </Row9>
          <Row9>
            <Col4>
              <SPAN10>Data Science in Manufacturing</SPAN10>
            </Col4>
            <Col>
              <Row8>
                <Div4>
                  <Image6 src={s3} alt="" />
                </Div4>
                <SPAN9>Actionable preventive maintenance</SPAN9>
              </Row8>
            </Col>
          </Row9>
          <Row9>
            <Col4>
              <SPAN10>Data Science in HR</SPAN10>
            </Col4>
            <Col>
              <Row8>
                <Div5>
                  <Image7 src={s4} alt="" />
                </Div5>
                <SPAN9>Predictive analytics</SPAN9>
              </Row8>
            </Col>
          </Row9>
        </Row7>
      </Wrapper3>
      <Wrapper4 fluid>
        <Row10>
          <Col5>
            <SPAN11>Eligibility</SPAN11>
            <br />
            <SPAN12>
              This course is well suited for participants of all levels of
              experience because of the high demand for Data Science with Python
              programmers. Data Science with Python is beneficial for analytics
              professionals interested in Python, software and IT professionals
              interested in Analytics, as well as anyone with a genuine interest
              in Data Science.
            </SPAN12>
          </Col5>
          <Col5>
            <SPAN11>Prerequisites</SPAN11>
            <br />
            <SPAN12>
              Good to have familiarity with basic concepts of mathematics and
              programming knowledge. Basic knowledge of Database tools and
              workflow will be a plus.
            </SPAN12>
          </Col5>
        </Row10>
      </Wrapper4>
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

  padding-bottom: 5rem;
`;
const Wrapper4 = styled(Container)`
  background: #f7fbff;
  min-height: 420px;
  max-width: 1440px;

  padding-bottom: 5rem;
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
  @media (max-width: 850px) {
    position: relative;
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

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
const Row7 = styled(Row)`
  width: 83%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
`;
const Row8 = styled(Row)`
  background: #36374d;
  position: relative;
  border-radius: 6px;
  width: 403px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    width: 323px;
    // flex-direction:column;
  }
  @media (max-width: 370px) {
    width: 303px;
    // flex-direction:column;
  }
`;
const Row9 = styled(Row)`
  margin-top: 3rem;
  display: flex;
  flex-wrap: wrap;
`;
const Row10 = styled(Row)`
  padding-top: 3rem;
  max-width: 83%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
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
const Col4 = styled(Col)`
  max-width: 360px;
  display: flex;
  align-items: center;
  flex: 1 1 360px;
  @media (max-width: 970px) {
    margin-bottom: 1rem;
  }
`;
const Col5 = styled(Col)`
  max-width: 572.83px;
  min-height: 292.54px;
  background: #ffffff;
  box-shadow: 0px 29px 35px -13px rgba(220, 220, 220, 0.61);
  border-radius: 6px;
  border-bottom: 5px solid #f8ac17;
  padding: 35px;
  flex: 1 1 572px;
`;

const Div1 = styled.div`
  margin-top: 4rem;
`;
const Div2 = styled.div`
  position: absolute;
  right: 19%;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Div3 = styled.div`
  position: absolute;
  right: 12%;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Div4 = styled.div`
  position: absolute;
  right: 32%;
  @media (max-width: 480px) {
    display: none;
  }
`;
const Div5 = styled.div`
  position: absolute;
  right: 49%;
  @media (max-width: 480px) {
    display: none;
  }
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
  margin-top: 3rem;

  text-transform: capitalize;

  color: #303030;
`;
const SPAN7 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  position: absolute;
  margin-left: 2rem;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN8 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN9 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 15px;
  /* identical to box height, or 94% */

  text-transform: capitalize;

  color: #ffffff;
`;
const SPAN10 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  /* identical to box height, or 83% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN11 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  /* identical to box height, or 143% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN12 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

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
const Image3 = styled.img`
  min-width: 77.14px;
  min-height: 24.36px;
  max-width: 77.14px;
  max-height: 24.36px;
  background-repeat: no-repeat;
`;
const Image5 = styled.img`
  min-width: 49.4px;
  min-height: 24.36px;
  max-width: 49.4px;
  max-height: 24.36px;
  background-repeat: no-repeat;
`;
const Image6 = styled.img`
  min-width: 127.7px;
  min-height: 24.36px;
  max-width: 128.7px;
  max-height: 24.36px;
  background-repeat: no-repeat;
`;
const Image7 = styled.img`
  min-width: 194.7px;
  min-height: 24.36px;
  max-width: 196.7px;
  max-height: 24.36px;
  background-repeat: no-repeat;
`;
const Image4 = styled.img`
  position: absolute;
  top: 60px;
  @media (max-width: 1230px) {
    max-width: 100%;
  }
`;
