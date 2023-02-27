import { styled } from "frontity";
import React from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import enrol from "../images/enrol2.png";
import Companies from "./Companies";

function Enrol() {
  return (
    <Container fluid>
      <Row>
        <Cols>
          <Row1>
            <SPAN>Why Enrol?</SPAN>
            <SPAN1>
              Gaining certifications will validate your skills and advance your
              career. Stay on top of your game and boost your credentials with
              the best IT certification courses in the industry.
            </SPAN1>
          </Row1>
          <Row2>
            <Row3>
              <Row4>
                <Details open>
                  <Summary>Remain competitive and employable</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details>
                  <Summary>Gain job proficiency more quickly</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details>
                  <Summary>Gain networking possibilities</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>

              <Row4>
                <Details>
                  <Summary>Keep your skills up-to-date</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details>
                  <Summary>Enhance professional credibility</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details>
                  <Summary>Earning more right from the start</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details>
                  <Summary>Remain competitive and employable</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
            </Row3>
          </Row2>
        </Cols>
        <Col>
          <Div>
            <Image src={enrol} />
          </Div>
        </Col>
      </Row>
      <Companies />
    </Container>
  );
}

export default Enrol;

const SPAN = styled.span`
  // width:213px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 48px;
  /* identical to box height, or 126% */

  color: #303030;
`;
const SPAN1 = styled.span`
  margin-top: 2rem;

  width: 590px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: #303030;
`;
const Row1 = styled(Row)`
  margin-top: 4rem;
  margin-left: 6rem;
  @media (max-width: 720px) {
    margin-left: 2rem;
    width: auto;
  }
  @media (max-width: 480px) {
    margin-left: 0rem;
    // margin:10px;
  }
`;
const Row2 = styled(Row)`
  width: 593px;
  margin-top: 3rem;
  border-top: 8px solid #fcaf17;
  margin-left: 6rem;
  @media (max-width: 720px) {
    margin-left: 2rem;
    width: auto;
    // margin:10px;
  }
  @media (max-width: 480px) {
    margin-left: 0rem;
    // margin:10px;
  }
`;
const Row3 = styled(Row)`
  width: 593px;
  margin-left: 1px;
  // border-top:8px solid #FCAF17;
  background: #fff;
  @media (max-width: 720px) {
    // margin-left: 2rem;
    width: auto;
  }
  @media (max-width: 480px) {
    margin-left: 0rem;
    // margin:10px;
  }
`;
const Row4 = styled(Row)`
  // width:593px;
  // margin-top:3rem;
  // border-top:8px solid #FCAF17;
  border-bottom: 1px solid #efece7;
`;
const Details = styled.details`
  padding-left: 20px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  margin-top: 25px;
  margin-bottom: 25px;
  /* or 171% */

  details summary::-webkit-details-marker {
    display: none;
  }
  summary::after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 15rem;
    border-top: 2px solid black;
    border-right: 2px solid black;
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(135deg)")};
    transition: transform 0.3s ease-in-out;
  }
  details[open]summary:after {
    // transform: rotate(-45deg);
  }
  summary {
    list-style: none;
    display:flex;
    justify-content:space-between;
    @media(max-width:650px){
    display:block;
    justify-content:auto;

    }
  }

  color: #303030;
`;
const Summary = styled.summary`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #303030;
`;
const Image = styled.img`
  // width:100%;
  width: 726px;
  // height:594px;
  @media (max-width: 730px) {
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  // width:726px;
  // height:594px;
  margin-top: 15rem;
  @media (max-width: 720px) {
    margin-top: 5rem;
  }
`;
const Cols = styled(Col)`
  @media (max-width: 720px) {
    padding: 2rem;
  }
`;
const P = styled.p`
margin-top:20px;
`;
