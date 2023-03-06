import { styled } from "frontity";
import React,{useState} from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import enrol from "../images/enrol2.png";
import Companies from "./Companies";
import Enquiry from "./Enquiry";

function Enrol() {

  const [open, setOpen] = useState(true)
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const onToggle = event => {
  event.preventDefault();
  setOpen(!open);
};
const onToggle1 = event => {
  event.preventDefault();
  setOpen1(!open1);
};
const onToggle2 = event => {
  event.preventDefault();
  setOpen2(!open2);
};
const onToggle3 = event => {
  event.preventDefault();
  setOpen3(!open3);
};
const onToggle4 = event => {
  event.preventDefault();
  setOpen4(!open4);
};const onToggle5 = event => {
  event.preventDefault();
  setOpen5(!open5);
};const onToggle6 = event => {
  event.preventDefault();
  setOpen6(!open6);
};


  return (
    <Wrapper fluid>
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
                <Details open={open} onClick={onToggle}>
                  <Summary >Remain competitive and employable</Summary>
                  <P className="details-content">
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details open={open1} onClick={onToggle1}>
                  <Summary>Gain job proficiency more quickly</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details open={open2} onClick={onToggle2}>
                  <Summary>Gain networking possibilities</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>

              <Row4>
                <Details open={open3} onClick={onToggle3}>
                  <Summary>Keep your skills up-to-date</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details open={open4} onClick={onToggle4}>
                  <Summary>Enhance professional credibility</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details open={open5} onClick={onToggle5}>
                  <Summary>Earning more right from the start</Summary>
                  <P>
                    Set yourself apart from your competitors by receiving
                    advanced training in your field.
                  </P>
                </Details>
              </Row4>
              <Row4>
                <Details open={open6} onClick={onToggle6}>
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
      <Enquiry />
      <Companies />
    </Wrapper>
  );
}

export default Enrol;

const Wrapper =styled(Container)`
// position:relative;
margin-top:3rem;
`;

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
  min-height: 539px;
  margin-top: 4.2rem;
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
  transition: transform 5.3s ease-in-out;
  animation: slowmation 18s infinite;
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
    @media(max-width:650px){
    margin-left: 18rem;
    position: relative;
    top: -26px;
      
  
      }
      @media(max-width:380px){
        margin-left: 14.5rem;
        position: relative;
        top: -26px;
          
      
          }
  }
  details[open] > summary::after {
  transform: rotate(-40deg);
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

  transition: max-height 0.3s ease-out;
  overflow: hidden;

`;
