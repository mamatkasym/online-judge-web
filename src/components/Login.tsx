import React, {FC, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";


const Login: FC = () => {
    const [credentials, setCredentials] = useState(
        {"username": "",
            "password": "",
        })

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(credentials);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name as any;

        setCredentials({
            ...credentials,
            [name]: value
        });
    }

    return(
        <Container style={{width: "50%", padding: "50px"}}>
        <Form onSubmit={event => onSubmit(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter email"
                    style={{width: "300px"}}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    style={{width: "300px"}}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
        </Container>
    )
}

export default Login;
