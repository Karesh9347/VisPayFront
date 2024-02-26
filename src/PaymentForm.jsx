import React, { useState } from 'react';
import { Form, Button, FormGroup,Card } from 'react-bootstrap';
import Success from './Success';
import Bottom from './Bottom';
import Nav from './Nav';
import axios from 'axios';
import './payment.css';
import {Link} from 'react-router-dom'
import './App.css'
import { base_url } from './key';
import { back_url} from './key';
const PaymentForm = ({category,setCategory}) => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [otherCheck, setOtherCheck] = useState(false);
  const [amount, setAmount] = useState(10036);
  const [rollNumber, setRollNumber] = useState('');
  //const [category, setCategory] = useState("college fee");
  const [mobile, setMobile] = useState('');
  const [name, setName] = useState('');
  const [termsAccepted,setTermsAccepted]=useState(false)
 const makeFalse=()=>{
  setTermsAccepted(false)
 }
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setAmount(10036);
      setIsChecked(true);
      setOtherCheck(false);
    }
  };
const check=()=>{
  setTermsAccepted(true)
}
  const otherCheckboxChange = (e) => {
    if (e.target.checked) {
      setAmount('');
      setIsChecked(false);
      setOtherCheck(true);
    }
  };

  const rollHandler = (e) => {
    setRollNumber(e.target.value);
  };

  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('amount', amount);
    localStorage.setItem('category', category);
  
    try {
      if (termsAccepted) {
        if (rollNumber.length !== 10) {
          alert('Roll number should be 10 characters');
        } else if (amount <= 0) {
          alert('Amount must be greater than 0');
        } else {
          setLoading(true);
  
          const response = await axios.post(`${back_url}/initiatePayment`, {
            amount,
            rollNumber,
            mobile,
            name,
          });
  
          if (response.data.redirectUrl) {
            window.location.href = response.data.redirectUrl;
          } else {
            console.error('Error initiating payment:', response.data.error);
            alert('Error initiating payment. Please try again.');
          }
        }
      } else {
        alert('Accept our terms and conditions');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Error initiating payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div style={{ marginTop: '100px'}} className="my-3">
      <Nav />
      {paymentStatus ? (
        <Success />
      ) : (
        <Card  id="subm">
          
         
          <CardHeader id='heading1'>Payment Form</CardHeader>
         
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label id="label">Name <span className='text-danger'>★</span></Form.Label>
              <Form.Control type="text" value={name} onChange={nameHandler} required placeholder='enter your name' id="control"/>
            </Form.Group>

            <Form.Group controlId="formRollNumber">
              <Form.Label id="label">Roll Number <span className='text-danger'>★</span></Form.Label>
              <Form.Control type="text" value={rollNumber} onChange={rollHandler} required placeholder='enter your roll number' id="control"/>
            </Form.Group>

            <Form.Group controlId="formMobileNumber">
              <Form.Label id="label">Mobile Number <span className='text-danger'>★</span></Form.Label>
              <Form.Control type="text" value={mobile} onChange={mobileHandler} required placeholder='enter your mobile number' id="control"/>
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">Select an option <span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={(e) => setCategory(e.target.value)} placeholder='enter your name' id="control" required>
                <option value="college fee">college fee</option>
                <option value="hostel fee">hostel fee</option>
                <option value="bus fee">bus fee</option>
                <option value="exam fee">exam fee</option>
                <option value="building fee">building fee</option>
                <option value="other fee">other fee</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formAmount">
              <div>
                <Form.Label id="label">Amount <span className='text-danger'>★</span></Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  placeholder='enter amount you want to pay now' id="control"
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  label="general"
                  onClick={handleCheckboxChange}
                  checked={isChecked}
                  defaultChecked
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  onClick={otherCheckboxChange}
                  checked={otherCheck}
                />
              </div>
            </Form.Group><br/>
            <FormGroup style={{display:"flex",justifyContent:"flex-start"}}>
            <Form.Check
              
              type='checkbox' 
              className='text-primary'
              checked={termsAccepted}
              onClick={()=>check()}
              onDoubleClick={()=>makeFalse()}/>
              <Link to="/terms">Accept ours terms and conditions</Link>
            
           </FormGroup>
            

          <CardFooter>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Proceed to Pay'}
            </Button>
            </CardFooter>
            
          </Form>
         
     </Card>
      )}
      <Bottom />
    </div>
  );
};

export default PaymentForm;
