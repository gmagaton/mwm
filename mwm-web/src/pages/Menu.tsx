import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';

function Menu() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/#"><img src={require("../images/logo-white.png")} alt={"logo"} width="200" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/dados">Dados</Nav.Link>
                            <Nav.Link href="/previsao">Previsão</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <p />
        </>
    )
}
export default Menu;