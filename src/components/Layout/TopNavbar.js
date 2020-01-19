import React from 'react'
import {
    Navbar, 
    Nav,
    Form,
    FormControl,
    Button
} from 'react-bootstrap';

const TopNavbar = () => {
    return(
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    )
}

export default TopNavbar;