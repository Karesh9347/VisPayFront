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
import './Admin.css'
const AdminNav = () => {
  const storedToken = localStorage.getItem("")
  const navigate = useNavigate();
  const logout = () => {

    localStorage.removeItem("token")
    navigate("/")
  }
  const reDirectToCharts = (() => {
    navigate("/charts")
  })
  const reDirectToHome = (() => {
    navigate("/dashboard")
  })
  const reDirectToRegister = (() => {
    navigate("/register")
  })
  const reDirectToTransactions = (() => {
    navigate("/alltransactions")
  })
  const reDirectToUpdate = (() => {
    navigate("/update")
  })
  const reDirectToDelete= (() => {
    navigate("/studentDelete")
  })
  return (

    <div className='sticky-top'>
      <Navbar expand="lg" className="bg-body-dark mb-3 sticky" id="nav">
        <Container fluid>
          <Navbar.Brand  className="admin"><h3 id='h1'>admin dashboard</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
            className="bg-body-dark"
            id="nav"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg}`} className="admin"><h2 id="h1">admin dashboard</h2></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-1 g-5" id='container'>
                <Button exact activeClassName="active"  to="/dashboard" onClick={reDirectToHome} variant="outline-primary" id="link"><House size={20} color='red' className='rounded-5 bg-secondary p-1' style={{ marginTop: "2px" }} />Home</Button><br />
                <Button activeClassName="active" id='link' to="/register" style={{ marginTop: "2px" }} onClick={reDirectToRegister} variant="outline-primary"><img src="./student.png" width={20} height={20} alt="" className='rounded-5 bg-success' />create student</Button><br />
                <Button activeClassName="active" id='link' to="/studentDelete" style={{ marginTop: "2px" }}onClick={reDirectToDelete} variant="outline-primary"><img src="./dels.webp" width={20} height={20} alt="" className='rounded-5'  />deletion</Button><br />
                <Button activeClassName="active" id='link' to="/update" style={{ marginTop: "2px" }} onClick={reDirectToUpdate} variant="outline-primary"><img src="./update.jpg" width={20} height={20} alt="" className='rounded-5' />updation</Button><br />
                <Button activeClassName="active" id='link' to="/alltransactions" style={{ marginTop: "2px" }} onClick={reDirectToTransactions} variant="outline-primary"><img src="./transactions.png" width={20} height={20} alt=""  />transactions</Button><br />
                <Button activeClassName="active" id='link' to="/charts" style={{ marginTop: "2px" }} onClick={reDirectToCharts} variant="outline-primary"><img src="./charts.webp" width={20} height={20} alt=""  />charts</Button><br />
                <Button className='bg-danger' id="link" onClick={logout}><img src="./logout.jpg" width={20} height={20} alt="" className='rounded-5' />log out</Button>

              </Nav>
              <br />
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
