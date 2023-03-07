import { styled } from "frontity";
import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import arrow from "../courseimages/arr.png";
import arr1 from "../courseimages/Yellow Arrow.png";

function CourseModules() {
  const [moduleOne, setModuleOne] = useState(true);
  const [moduleTwo, setModuleTwo] = useState(false);
  const [moduleThree, setModuleThree] = useState(false);
  const [moduleFour, setModuleFour] = useState(false);
  const [moduleFive, setModuleFive] = useState(false);
  const [moduleSix, setModuleSix] = useState(false);
  const [moduleSeven, setModuleSeven] = useState(false);

  return (
    <Wrapper fluid>
      <Row1>
        <SPAN1>
          Course <Bold>Modules</Bold>
        </SPAN1>
        <br />
        <SPAN2>
          Topics Covered: Data Science, Mathematics, Python Programming, Data
          Analytics Visualization, Machine learning, Artificial Intelligence,
          Business Intelligence-Powerbi, Database management.
        </SPAN2>
      </Row1>
      <Row2>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleOne}
            onClick={() => setModuleOne(!moduleOne)}
          >
            Module 1
          </Button1>
          <Row4 onClick={() => setModuleOne(!moduleOne)}>
            <Div>
              <SPAN3>Core Python </SPAN3>
            </Div>
            <Div1>
            
              <Image 
              moduleone={moduleOne} src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleOne ? (
            <>
              <Row5 moduleone={moduleOne}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleOne}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleOne}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleTwo}
            onClick={() => setModuleTwo(!moduleTwo)}
          >
            Module 2
          </Button1>
          <Row4 onClick={() => setModuleTwo(!moduleTwo)}>
            <Div>
              <SPAN3>Python for data science </SPAN3>
            </Div>
            <Div1>
              <Image 
            moduleone={moduleTwo}
              
              src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleTwo ? (
            <>
              <Row5 moduleone={moduleTwo}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleTwo}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleTwo}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleThree}
            onClick={() => setModuleThree(!moduleThree)}
          >
            Module 3
          </Button1>
          <Row4 onClick={() => setModuleThree(!moduleThree)}>
            <Div>
              <SPAN3>Probability and statistics </SPAN3>
            </Div>
            <Div1>
              <Image 
            moduleone={moduleThree}
              
              src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleThree ? (
            <>
              <Row5 moduleone={moduleThree}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleThree}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleThree}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleFour}
            onClick={() => setModuleFour(!moduleFour)}
          >
            Module 4
          </Button1>
          <Row4 onClick={() => setModuleFour(!moduleFour)}>
            <Div>
              <SPAN3>Data cleaning and preprocessing</SPAN3>
            </Div>
            <Div1>
              <Image 
            moduleone={moduleFour}
              
              src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleFour ? (
            <>
              <Row5 moduleone={moduleFour}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFour}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFour}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleFive}
            onClick={() => setModuleFive(!moduleFive)}
          >
            Module 5
          </Button1>
          <Row4 onClick={() => setModuleFive(!moduleFive)}>
            <Div>
              <SPAN3>Introduction to machine learning</SPAN3>
            </Div>
            <Div1>
              <Image 
            moduleone={moduleFive}
            src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleFive ? (
            <>
              <Row5 moduleone={moduleFive}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFive}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleFive}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleSix}
            onClick={() => setModuleSix(!moduleSix)}
          >
            Module 6
          </Button1>
          <Row4 onClick={() => setModuleSix(!moduleSix)}>
            <Div>
              <SPAN3>Unsupervised Machine learning </SPAN3>
            </Div>
            <Div1>
              <Image 
            moduleone={moduleSix}
            src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleSix ? (
            <>
              <Row5 moduleone={moduleSix}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSix}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSix}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
        <Row3>
          <Button1
            variant="warning"
            moduleone={moduleSeven}
            onClick={() => setModuleSeven(!moduleSeven)}
          >
            Module 7
          </Button1>
          <Row4 onClick={() => setModuleSeven(!moduleSeven)}>
            <Div>
              <SPAN3>ML Deployment</SPAN3>
            </Div>
            <Div1>
              <Image src={arrow} alt="" />
            </Div1>
          </Row4>
          {moduleSeven ? (
            <>
              <Row5 moduleone={moduleSeven}>
                <Image1 src={arr1} alt="" />
                <SPAN4>basics, conditional statements, loops</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSeven}>
                <Image1 src={arr1} alt="" />
                <SPAN4>lists, tuples, dictionaries, sets</SPAN4>
              </Row5>
              <Row5 moduleone={moduleSeven}>
                <Image1 src={arr1} alt="" />
                <SPAN4>functions, classes</SPAN4>
              </Row5>
            </>
          ) : (
            ""
          )}
        </Row3>
      </Row2>
    </Wrapper>
  );
}

export default CourseModules;

// css
const Wrapper = styled(Container)`
  background: #ffffff;
`;
const Row1 = styled(Row)`
  padding-top: 4rem;
`;
const Row2 = styled(Row)`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const Row3 = styled(Row)`
  display: flex;
  gap: 25px;
  justify-content: center;
  margin-top: 15px;
`;
const Row4 = styled(Row)`
  max-width: 635.21px;
  min-height: 65px;
  background: #f7fbff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 848px) {
    max-width: 450.21px;
  }
  @media (max-width: 660px) {
    max-width: 350.21px;
  }
  @media (max-width:520px) {
    max-width: 235.21px;
  }
`;
const Row5 = styled(Row)`
  max-width: 635.21px;
  min-height: 65px;
  display: flex;
  // background: #F8AC17;
  align-items: center;
  margin-left: ${(props) => (props.moduleone ? "12.2rem" : "0")};

  @media (max-width: 850px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 660px) {
    max-width: 515.21px;
  }
  @media (max-width: 480px) {
    margin-left:3rem;
    
  }
`;

const Button1 = styled(Button)`
  max-width: 181.74px;
  min-height: 65px;
  border: none;
  border-radius: 0;
  background: ${(props) => (props.moduleone ? "#F8AC17" : "#F7FBFF")};

  color: black;
  %:hover {
    background: #f8ac17;
  }

  @media (max-width: 600px) {
    max-width: 145.21px;
  }
  @media (max-width: 410px) {
    max-width: 95.21px;
  }
  @media (max-width: 360px) {
    max-width: 75.21px;
  }
`;
const Div = styled.div`
  width: 295px;
`;
const Div1 = styled.div`
  width: 32px;
`;
const SPAN1 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */
  text-align: center;

  text-transform: capitalize;

  color: #303030;
`;
const SPAN2 = styled.span`
  max-width: 818.53px;
  font-family: "Metropolis";
  padding-top: 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  text-transform: capitalize;

  color: #303030;
`;
const SPAN3 = styled.span`
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  /* identical to box height, or 156% */

  text-transform: capitalize;

  color: #303030;
`;
const SPAN4 = styled.span`
  width: 295px;
  font-family: "Metropolis";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  text-transform: capitalize;

  color: #303030;
`;
const Bold = styled.span`
  font-weight: 600;
`;
const Image1 = styled.img`
  width: 49.85px;
  @media (max-width: 480px) {
    width: 40.85px;

  }
`;
const Image = styled.img`
  transform: rotate(${(props) => (props.moduleone ? "" : "180deg")});
`;
