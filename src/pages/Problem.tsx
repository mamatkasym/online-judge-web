import React, {FC} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Divider} from 'antd';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { MathJaxContext } from 'better-react-mathjax';

import Submit from "../components/Submit";
import { MathJax } from "better-react-mathjax";
import Submissions from "../components/Submissions";


const Statement = ({problem}: any) => {
  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };

  return (
    <MathJaxContext config={config}>

  <Container style={{padding: "50px"}}>
        <Row>
            <h2 className="problem-title"> {problem.id}.  { problem.title } </h2>
        </Row>
        <Row>
            <MathJax> {problem.description} </MathJax>
        </Row>
        <Divider/>
        <Row>
            <h3 className="problem-input-title">Input</h3>
            <MathJax>{problem.input_description} </MathJax>
        </Row>
        <Divider/>
        <Row>
            <h3 className="problem-input-title">Output</h3>
            <p>{problem.output_description}</p>
        </Row>
        <Divider/>
        {/* <Row> <SelectSizesExample/>  </Row>
        <br/>
        <UploadSolution/> */}
        <Submit/>
  </Container>
  </MathJaxContext>

  )

}
const Problem: FC = () => {
    const { problemId } = useParams();
    const problems = require("../data/problems.json")
    const problem = problems.filter((problem: any) => problem.id === Number(problemId))[0];
    return (
        <Container style={{padding: "50px"}}>
          <Row>
            <Col xs={12} md={8}>
              <Tabs defaultActiveKey="statement">
              <Tab title="Statement" eventKey="statement">
                <Statement problem={problem}/>
              </Tab>
              <Tab title="Submit" eventKey="submit">
                <Submit/>
              </Tab>
              <Tab eventKey="editorial" title="Editorial" disabled></Tab>
              <Tab eventKey="submissions" title="Submissions"> <Submissions/> </Tab>
              </Tabs>
            </Col>
            <Col xs={6} md={4} />
          </Row>
        </Container>
    )
}

export default Problem;
