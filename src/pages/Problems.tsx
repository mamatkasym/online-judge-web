import React, {FC, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import ProgressBar from 'react-bootstrap/ProgressBar';
import jsonProblems from "../data/problems.json"


const Problems: FC = () => {
    interface Problem {
        id: number;
        title: string;
        difficulty: number
    }
    const tags = require("../data/tags.json");
    const [problems, setProblems] = useState(jsonProblems);
    const [search, setSearch] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    useEffect(() => {
        // @ts-ignore
        setProblems(jsonProblems.filter((problem: Problem) => problem.title.includes(search)));
    }, [search])

    // @ts-ignore
    return (
        <Container style={{padding: "50px"}}>
            <Row style={{ width: "60%"}}>
                <Col md={5}>
                    <InputGroup className="mb-3" style={{width: "100%"}}>
                        <Form.Control
                            placeholder="Search problems"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={(event) => handleSearch(event as any)}
                        />
                    </InputGroup>
                </Col>

                <Col>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
                            Difficulty
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {[0,1,2,3,4,5,6,7,8,9].map(number =>
                                <Dropdown.Item href="#/action-1">{number * 10 + 1}-{number * 10 + 10}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>

                <Col>

                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
                            Tags
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                tags.map((tag: string) => <Dropdown.Item href="#/action-1">{tag}</Dropdown.Item>)
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row>
                <Col md={8}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Difficulty</th>
                        </tr>
                        </thead>
                        <tbody>
                        { problems.map((problem: any) =>
                            <tr key={problem.id}>
                                <td>{problem.id}</td>
                                <td>
                                    <Link to={`/problems/${problem.id}`}>{problem.title}</Link>
                                </td>
                                <td><ProgressBar now={problem.difficulty}/></td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}

export default Problems;
