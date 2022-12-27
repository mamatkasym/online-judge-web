import React, {FC, useState} from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import CodeMirror from '@uiw/react-codemirror';
import { eclipse} from '@uiw/codemirror-theme-eclipse';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import UploadSolution from "./UploadSolution";
import { Container } from "react-bootstrap";


interface SubmissionInterface{
    language: string;
    code: any;
}
const Submit: FC = () => {
    const [submission, setSubmission] = useState<SubmissionInterface>({
        language: "",
        code: "",
    });

    const setCode = (code: string | ArrayBuffer| null) => {
        setSubmission({...submission, code: code})
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        console.log(event.currentTarget);
    }

    return (
        <Container style={{paddingTop: "50px"}}>
        <Form
            onSubmit={handleSubmit}
        >
            <Form.Group className="mb-3" >
                <Form.Select
                    size="sm" 
                    style={{ width: "40%" }}
                    value={ submission.language } 
                    onChange={(event) => setSubmission({...submission, language: event.target.value})
                    }
                >
                    <option>Select language</option>
                    <option value="java">Java</option>
                    <option value="python">Python</option>
                    <option value="c++">C++</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={10}>
                        {/* <Form.Control
                            value={submission.code}
                            onChange={(event) => setCode(event.target.value) }
                            as="textarea"
                            rows={10}
                        /> */}
                    <CodeMirror 
                        theme={eclipse}
                        height="400px"
                        value={submission.code} 
                        extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                        onChange={(value) => setCode(value) }
                    />
                    </Col>
                    <Col> <UploadSolution setCode={setCode} /> </Col>
                </Row>
            </Form.Group>
            <Button type="submit">Submit</Button>
            
        </Form>
        </Container>
    )
}

export default Submit;