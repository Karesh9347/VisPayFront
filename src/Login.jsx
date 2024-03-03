import React, { useState } from 'react';
import { Container, Form, Button, Card, CardBody, FormFloating, CardHeader, FormControl, FloatingLabel, FormLabel } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import { base_url } from './key';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rollNumber: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${base_url}/login`, formData);
      const token = response.data.token;

      if (token) {
        console.log(token);

        
        localStorage.setItem("token", token);
        navigate("/profile");
      } else {

        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data.message : error.message);
      const errorMessage = error.response ? error.response.data.message : 'Unknown error';
      alert(`Error during login: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='fixed-top my-3'>
      <Nav/>
      <center className='main' style={{paddingTop:"1px",marginTop:"30px"}}>

        <center id="sub">
          <p id='heading'>Login form</p>
          <hr id="line"></hr>
          <Container>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formRollNumber">
                <FormLabel id="label">roll number <span className='text-danger'>★</span></FormLabel>
               
                <FormControl
                  type="text"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleChange}
                  required
                  autoComplete='false'
                  placeholder='enter your roll number'
                  id="control"
                />
               
               
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label id="label">Password <span className='text-danger'>★</span></Form.Label>
                <FormControl
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder='enter your password'
                  id="control"
                />
              </Form.Group><br />

              <Button variant="primary" type="submit" disabled={loading} className='my-2 text-center'>
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
          </Container>
        </center>
      </center>
    </main>
  );
};

export default Login;
