import { Button, Col, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Header = () => {
    return (
        <>
            <Col md={12}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </>
    )
}

export default Header