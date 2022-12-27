import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import jsonSubmissions from "../data/submissions.json"
import Modal from 'react-bootstrap/Modal';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { xcodeLight} from '@uiw/codemirror-theme-xcode';
import { Container } from "react-bootstrap";

const StatusBadge = ({status}: {status: string}) => {
    var bg: { [key: string]: string; } = {
        "AC": "info",
        "WA": "danger",
        "TL": "warning"
    }
    return <Badge bg={bg[status]}>{status}</Badge>
}
const Submissions = () => {
    const [submissions, setSubmissions] = useState<any[]>([])
    const [show, setShow] = useState(false);
    const [submission, setSubmission] = useState({"code": "empty"})

    const handleClose = () => setShow(false);
    const handleShow = (event: React.BaseSyntheticEvent) => {
        event.preventDefault();
        setSubmission(submissions.find(s => Number(s.id) == Number(event.target.innerText)))
        setShow(true);
    }

    useEffect (() => {
        setSubmissions(jsonSubmissions);
    }, [])

    return (
        <Container style={{paddingTop: "50px"}}>
        <Table striped bordered hover size="sm" variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Language</th>
              <th>Time</th>
              <th>Memory</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
            submissions.map((submission) => 
                            <tr key={submission.id}>
                            <td><a href="" onClick={handleShow}>{submission.id}</a></td>
                            <td>{submission.language}</td>
                            <td>{submission.runtime} ms</td>
                            <td>{submission.memory} kB</td>
                            <td><StatusBadge status={submission.status}/></td>
                          </tr>
            )
        }
          </tbody>
        </Table>
              <Modal 
                show={show} 
                onHide={handleClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
              <Modal.Header closeButton>
                <Modal.Title>Code</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CodeMirror 
                    editable={false}
                    theme={xcodeLight}
                    value={submission.code} 
                    extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                />
              </Modal.Body>
            </Modal>
            </Container>
      );
}

export default Submissions;