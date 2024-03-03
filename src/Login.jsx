import React, { useState } from 'react';
import { Container, Form, Button, FormControl, FormLabel, FormGroup, FormCheck } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { back_url } from './key';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';
import './App.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rollNumber: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${back_url}/login`, formData);
      const token = response.data.token;

      if (token) {
        localStorage.setItem('token', token);
        await toast.success('User logged in successfully\n refresh the browser');
        const res = await axios.get(`${back_url}/user`, {
          headers: {
            'x-token': token,
          },
        });

        if (res.data.role === 'admin') {
          navigate('/dashboard');
        } else {
          navigate('/profile');
        }
      } else {
        toast.error('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data.message : error.message);
      const errorMessage = error.response ? error.response.data.message : 'Unknown error';
      toast.error(`Error during login: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='fixed-top my-3'>
      <Nav />
      <center>
        <div className='main' style={{ paddingTop: '1px', marginTop: '30px' }}>
          <div id='circle'></div>
          <div id='sub'>
            <p id='heading'>Login form</p>
            <hr id='line'></hr>
            <Container>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId='formRollNumber'>
                <img src="./roll.webp" alt="" width={20} height={20} className='rounded-5'/> <FormLabel id='label'>
                    Roll Number <span className='text-danger'>★</span>
                  </FormLabel>
                   <FormControl
                    type='text'
                    name='rollNumber'
                    value={formData.rollNumber}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                    placeholder='Enter your roll number'
                    id='control'
                  /> 
               
                </Form.Group>

                <Form.Group controlId='formPassword'  className="mt-3">
                <img src="./password.jpg" alt="" width={20} height={20} className='rounded-5'/>  <Form.Label id='label'>
                    Password <span className='text-danger'>★</span>
                  </Form.Label>
                  <FormControl
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder='Enter your password'
                    id='control'
                  />
                </Form.Group>

                <FormGroup controlId='formShowPassword'>
                  <Form.Check
                    type='checkbox'
                    label='Show Password'
                  
                    checked={showPassword}
                    onChange={handleTogglePassword}
                  />
                </FormGroup>

                <Button variant='danger' type='submit' disabled={loading} className='my-2 text-center'>
                  {loading ? 'Logging in...' : 'Login'}
                </Button>
              </Form>
              
              <p className='text-light' style={{fontSize:"10px"}}>
"By logging in, you accept our <a href="/terms" className='text-danger'>terms and conditions.
</a>"</p>
            </Container>
          </div>
        </div>
       
      </center>
      <ToastContainer />
    </main>
  );
};

export default Login;
