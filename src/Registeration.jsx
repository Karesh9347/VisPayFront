import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Spinner, FormSelect } from 'react-bootstrap';
import axios from 'axios';
import zxcvbn from 'zxcvbn';
import './App.css';
import { back_url } from './key';
import BottomNavbar from './Bottom';
import Nav from './Nav';


const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    mobileNumber: "",
    password: "",
    admissionType: "",
    year: "",
    dob: "",
    section: "",
    paidFee: "",
    regulation: "",
    totalFee: "",
    address: "",
    email: "",
    guardianName: "",
    
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
      if(formData.length!==10)
      {
         alert('mobile number must and should contain 10 digits.');
        
      }

     
      const response = await axios.post(`${back_url}/registration`, formData);
      console.log(response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.error('Error creating user:', error.response.data.error);
      toast.error('User is not created');
    } finally {
      setLoading(false);
    }
  };
console.log(formData)
  return (
    <main>
      <Nav />
      <center style={{ marginBottom: "100px" }}>
        <br />
        <center id="sub1" style={{ marginTop: "100px" }} className='main1'>
          <h2 id="heading">Registration Form</h2>
          <hr></hr>
          <Form onSubmit={handleSubmit} id="form">
            <FormGroup>
              <FormLabel id="label">Name <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your full name.'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                id="control"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Roll Number <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your roll number.'
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                required
                id="control"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">DOB<span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your date of birth.'
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                id="control"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Mobile Number <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your mobile number.'
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                id="control"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Password <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your password.'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                id="control"
              

              />
            </FormGroup>

            <FormGroup>
              <FormLabel id="label">Admission Type 
              <span className='text-danger'>★</span></FormLabel>
              <FormControl
                value={formData.admissionType}
                onChange={handleChange}
                id="control"
                name='admissionType'
                required

              />
              
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Year <span className='text-danger'>★</span></FormLabel>
              <FormControl
                value={formData.year}
                onChange={handleChange}
                id="control"
                name='year'
                required

              />
               
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Section <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter section.'
                type="text"
                name="section"
                value={formData.section}
                onChange={handleChange}
                id="control"
                required

              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Paid Fee <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter paid fee.'
                type="text"
                name="paidFee"
                value={formData.paidFee}
                onChange={handleChange}
                id="control"
                required

              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Regulation <span className='text-danger'>★</span></FormLabel>
              <FormControl
                value={formData.regulation}
                onChange={handleChange}
                id="control"
                name='regulation'
                required
              />
               
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Total Fee <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter total fee.'
                type="text"
                name="totalFee"
                value={formData.totalFee}
                onChange={handleChange}
                id="control"
                required

              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Address <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your address.'
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                id="control"
                required

              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Email <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter your email.'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="control"
                required

              />
            </FormGroup>
            <FormGroup>
              <FormLabel id="label">Guardian Name <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter guardian name.'
                type="text"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleChange}
                id="control"
                required

              />
            </FormGroup>
            
            <br />
            <Button type="submit" className='text-center'>
              {loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit'}
            </Button>
          </Form>
        </center>
      </center>
      <BottomNavbar />
    </main>
  );
};

export default Registration;
