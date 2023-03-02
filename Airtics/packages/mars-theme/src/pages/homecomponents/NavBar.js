import { styled } from 'frontity';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../images/LOGO.png'
function NavBar() {
  return (
    <>
    <Navbar bg="" expand="lg" style={{position:"relative",minHeight:"5rem",marginLeft:"80px",zIndex:"1111"}}>
      <Container>
        <Navbar.Brand href="#home" style={{display:"flex",justifyContent:"flex-start"}}>
            <Image src={Logo} alt="Logo"  style={{width:"166px",height:"52px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/" style={{color:"black"}}>Home</Nav.Link>
            <Nav.Link href="/about" style={{color:"black"}}>About</Nav.Link>
            <Nav.Link href="/about" style={{color:"black"}}>Our Programs</Nav.Link>
            <Nav.Link href="/about" style={{color:"black"}}>Blogs</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </>
  )
}

export default NavBar
const Image = styled.img`
height: 52.15119552612305;
width: 166.99468994140625;
left: 117px;
top: 85px;
border-radius: 0px;
margin-left:30rem


position: absolute;
left: 8.12%;
right: 80.28%;
top: 0.67%;
bottom: 98.91%;


`;