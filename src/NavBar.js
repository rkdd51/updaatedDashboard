import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">McKisney & Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="My HR" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Personal Info
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My PTO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My HR Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Employment Decleration Request
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="My Benefits" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Personal Info
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Euroticket food Card
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Child Care & education Support
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Car Plan</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="My Compensation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Monthly Payslip
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My Annual Income Statement
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Severance Plan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                My Compensation Memos (OLD)
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">IBO HR</Nav.Link>
            <Nav.Link href="#home">
              Adrien Weza
              <br />
              Poland
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
