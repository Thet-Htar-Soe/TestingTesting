import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

const AppNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#">NewsApp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#technology">Technology</Nav.Link>
                    <Nav.Link href="#travel">Travel</Nav.Link>
                    <Nav.Link href="#finance">Finance</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavBar;