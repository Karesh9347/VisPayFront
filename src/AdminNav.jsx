import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { House } from 'react-bootstrap-icons';
import { ListGroup } from 'react-bootstrap';

const AdminNav = () => {
  const storedToken=localStorage.getItem("")
    const navigate=useNavigate();
    const logout=()=>{
       
        localStorage.removeItem("token")
        navigate("/")
    }
  return (
    
    <div className='sticky-top'>
      <Navbar expand="lg" className="bg-body-secondary mb-3 sticky">
        <Container fluid>
          <Navbar.Brand className='text-primary' style={{ fontWeight: "800" }}>Admin DashBoard</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="bg-body-secondary"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg}`} className='text-primary' style={{ fontWeight: "800" }}>
                Admin DashBoard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-1 g-5" id='container'>
                <NavLink exact activeClassName="active" className='link' to="/dashboard"><House size={30} color='red' className='rounded-5 bg-secondary p-1'  style={{marginTop:"2px"}}/>Home</NavLink>
                <NavLink activeClassName="active" className='link' to="/register"  style={{marginTop:"2px"}}><img src="./student.png" width={30} height={30} alt="" className='rounded-5 bg-success' />create student</NavLink>
                <NavLink activeClassName="active" className='link' to="/studentDelete" style={{marginTop:"2px"}}><img src="./dels.webp" width={30} height={30} alt="" className='rounded-5' />deletion</NavLink>
                <NavLink activeClassName="active" className='link' to="/update"  style={{marginTop:"2px"}}><img src="./update.jpg" width={30} height={30} alt="" className='rounded-5' />updation</NavLink>
                <NavLink activeClassName="active" className='link' to="/alltransactions"  style={{marginTop:"2px"}}><img src="./transactions.png" width={30} height={30} alt="" />transactions</NavLink>
                <NavLink activeClassName="active" className='link' to="/charts"  style={{marginTop:"2px"}}><img src="./charts.webp" width={30} height={30} alt="" />charts</NavLink>
                <Button className='link' onClick={logout}><img src="./logout.jpg" width={30} height={30} alt="" className='rounded-5 '/>log out</Button>
               
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
    
  );
}

export default AdminNav;
