import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";


/*
Navigation bar component, including page navigation and authentication bars
 */
const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand style={{fontFamily: "LordOfRings", color: ""}} as={Link} to="/">CodeLords</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"> Home </Nav.Link>
                        <Nav.Link as={Link} to="problems">Problems</Nav.Link>
                        <Nav.Link as={Link} to="contests">Contests</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as={Link} to="login">Login</Nav.Link>
            </Container>
        </Navbar>
)
};

export default CustomNavbar;
