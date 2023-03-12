import React, { useContext } from "react";
import { Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvidor";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user,logOut } = useContext(AuthContext);
  const handleSignout = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
  }

  return (
    <Navbar
      className="mb-4"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">Dragon News</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Categories</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link>
            {
              user?.uid?
              <>
              <span className="text-center me-2">{user?.displayName}</span>
              <Button type="button" onClick={handleSignout} className="btn btn-light">Logout</Button>
              </>
               :
               <>
                   <Link className="me-2" to='/login'>Login</Link>
                   <Link to='/register'>Register</Link>
               </>
            }
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL?
            <Image
              className="me-2"
              roundedCircle
              style={{ height: "30px" }}
              variant="top"
              src={user.photoURL}
            /> : <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
