import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import CustomNavbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <CustomNavbar/>
                </Row>
            </Container>
            <Outlet />
        </>
    )
}

export default Home;
