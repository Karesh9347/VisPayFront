import React, { useState } from 'react';
import axios from 'axios';
import { Card, FormGroup, Form, FormLabel, FormControl, Button, Container, CardTitle,Spinner } from 'react-bootstrap';
import Nav from './Nav';
import zxcvbn from 'zxcvbn'; 
import './App.css';
import { back_url } from './key';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    mobileNumber: '',
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

      const passwordStrength = zxcvbn(formData.password);
      if (passwordStrength.score < 3) {
        alert('Please choose a stronger password.');
        setLoading(false);
        return;
      }

      const response = await axios.post(`${back_url}/registration`, formData);
      console.log(response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.error('Error creating user:', error.response.data.error);
      alert('User is not created');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='fixed-top my-3'>
      <Nav />
      <center className='main1' style={{paddingTop:"1px",marginTop:"1px"}}>
        <center  id="sub1" >
        <h2 id="heading">Registration Form</h2>
        <hr></hr>
          <Form onSubmit={handleSubmit} id="form">
            <FormGroup>
              <FormLabel id="label">Name <span className='text-danger'>★</span></FormLabel>
              <FormControl
              placeholder='enter your full name.' type="text" name="name" value={formData.name} onChange={handleChange} required id="control"/>
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Roll Number <span className='text-danger'>★</span></FormLabel>
             
              <FormControl  placeholder='enter your roll Number.' type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} required id="control"/>
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Mobile Number <span className='text-danger'>★</span></FormLabel>
              <FormControl  placeholder='enter your mobile number.' type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required id="control"/>
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Password <span className='text-danger'>★</span></FormLabel>
              <FormControl  placeholder='enter your password.' type="password" name="password" value={formData.password} onChange={handleChange} required id="control"/>
            </FormGroup><br />

            <Button type="submit" className='text-center'>
              {loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit'}
            </Button><br />
          </Form>
        </center>
      </center>
    </main>
  );
};

export default Registration;
