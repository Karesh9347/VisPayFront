import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button, Spinner, FormFile } from 'react-bootstrap';
import axios from 'axios';
import zxcvbn from 'zxcvbn';
import './App.css';
import { base_url } from './key';
import AdminNav from './AdminNav';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    mobileNumber: "",
    password: "",
    admissionType: "",
    role: "",
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

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
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

      const formDataWithImage = new FormData();

      // Append text data
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithImage.append(key, value);
      });

      // Append image file
      if (imageFile) {
        formDataWithImage.append('profileImage', imageFile);
      }

      const response = await axios.post(`${base_url}/registration`, formDataWithImage, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data.message);
      alert(response.data.message);
    } catch (error) {
      console.error('Error creating user:', error.response?.data?.error || error.message);
      alert('User is not created');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <AdminNav />
      <center>
        <center className='card' id="subr">
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
                type="tel"
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

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">type of admission <span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={handleChange} id="control" required name="admissionType" value={formData.admissionType}>
                <option value="">choose your type of admission</option>
                <option value="counselling">counselling</option>
                <option value="NRI">NRI</option>

              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">role in college<span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={handleChange} id="control" required name="role" value={formData.role}>
                <option value="">choose your role in college ....</option>
                <option value="student">student</option>
                <option value="teacher">teacher</option>
                <option value="admin">admin</option>

              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">year of studying<span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={handleChange} id="control" required name="year" value={formData.year}>
                <option value="">choose your year of studying....</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>


              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">section<span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={handleChange} id="control" required name="section" value={formData.section}>
                <option value="">choose your section....</option>
                <option value="windows">windows</option>
                <option value="mac">mac</option>
                <option value="andriod">andriod</option>
                <option value="linux">linux</option>
                <option value="ubntu">ubuntu</option>


              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">regulation<span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={handleChange} id="control" required name="regulation" value={formData.regulation}>
                <option value="">choose your regulation....</option>
                <option value="R-18">R-18</option>
                <option value="R-19">R-19</option>
                <option value="R-20">R-20</option>
                <option value="R-21">R-21</option>
                <option value="R-22">R-22</option>
                <option value="R-23">R-23</option>
                <option value="R-24">R-24</option>
                <option value="R-25">R-25</option>
                <option value="R-26">R-26</option>
                <option value="R-27">R-27</option>


              </Form.Control>
            </Form.Group>


            <FormGroup>
              <FormLabel id="label">Paid Fee <span className='text-danger'>★</span></FormLabel>
              <FormControl
                placeholder='Enter paid fee....'
                type="text"
                name="paidFee"
                value={formData.paidFee}
                onChange={handleChange}
                id="control"
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


            <Form.Group>
              <FormLabel id="label">Profile Image</FormLabel>
              <input 
              className='form-control'
                label="Profile Image"
                type="file"
                name="profileImage" 
                onChange={handleImageChange} />

            </Form.Group>

            <br />
            <Button type="submit" className='text-center'>
              {loading ? <Spinner animation="border" variant="light" size="sm" /> : 'Submit'}
            </Button>
          </Form>
        </center>
      </center>
    </div>
  );
};

export default Registration;
