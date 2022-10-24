import React, {FC} from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProblemStatement: FC = () => {
    const { problemId } = useParams();
    const problems = require("../data/problems.json")
    const problem = problems.filter((problem: any) => problem.id == problemId)[0];
    return (
        <Container style={{padding: "50px"}}>
            <Row>
                <Col xs={12} md={8}>
                    <Row>
                        <h1> {problem.id}.  { problem.title } </h1>
                    </Row>
                    <Row>
                        {problem.description}
                    </Row>
                    <Row>
                        <h2>Input</h2>
                        {problem.input_description}
                    </Row>
                    <Row>
                        <h2>Output</h2>
                        {problem.output_description}
                    </Row>
                </Col>

                <Col xs={6} md={4} />
            </Row>
        </Container>
    )
}

export default ProblemStatement;
