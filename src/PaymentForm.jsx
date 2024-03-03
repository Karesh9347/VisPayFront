import React, { useEffect, useState } from 'react';
import { Form, Button, FormGroup, Card, CardHeader, CardFooter, Modal } from 'react-bootstrap';
import Success from './Success';
import Bottom from './Bottom';
import Nav from './Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { base_url } from './key'; 
import './App.css';
import Login from './Login'
const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [otherCheck, setOtherCheck] = useState(false);
  const [fullCheck, setFullCheck] = useState(false);
  const [amount, setAmount] = useState(10036);
  const [rollNumber, setRollNumber] = useState('');
  const [mobile, setMobile] = useState('');
  const [counseling, setCounseling] = useState(true);
  const [Data, setData] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [token,setToken]=useState();
const [category,setCategory]=useState();
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    
    if (storedToken) {
      setToken(storedToken)
      axios.get(`${base_url}/user`, { headers: { 'x-token': storedToken } })
        .then((res) => {
          setData(res.data);
          setRollNumber(res.data.rollNumber);
  
          if (res.data.admissionType === "counseling") {
            setCounseling(false);
          }
        })
        .catch((err) => console.error('Error fetching user data:', err));
    }
  }, []); 
  

  const makeFalse = () => {
    setTermsAccepted(false);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setAmount(10036);
      setIsChecked(true);
      setOtherCheck(false);
      setFullCheck(false);
    }
  };

  const check = () => {
    setTermsAccepted(true);
  };

  const otherCheckboxChange = (e) => {
    if (e.target.checked) {
      setAmount('');
      setIsChecked(false);
      setOtherCheck(true);
      setFullCheck(false);
    }
  };

  const rollHandler = (e) => {
    setRollNumber(e.target.value);
  };

  const fullCheckboxChange = () => {
    setAmount(Data.totalFee);
    setFullCheck(true);
    setOtherCheck(false);
    setIsChecked(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('amount', amount);
    localStorage.setItem('category', category);

    try {
      if (termsAccepted) {
        if (amount <= 0) {
          alert('Amount must be greater than 0');
        } else {
          setLoading(true);
          if (rollNumber !== Data.rollNumber) {
            alert("enter your roll number through this\n account you can only pay fees");
          } else {
            const response = await axios.post(`${base_url}/initiatePayment`, {
              amount,
              rollNumber,
            });

            if (response.data.redirectUrl) {
              window.location.href = response.data.redirectUrl;
            } else {
              console.error('Error initiating payment:', response.data.error);
              alert('Error initiating payment. Please try again.');
            }
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (rollNumber === Data.rollNumber) {
      setShow(true);
    }
  };
  const remainingFeeClick=()=>{
    setAmount(Data.totalFee-Data.paidFee)
    handleClose();
  }
  const totalFeeClick=()=>{
    setAmount(Data.totalFee)
    handleClose();
  }
  const installmenClick=()=>{
    setAmount(Data.totalFee/4)
    handleClose();
  }

  return (
    <>
    {token?(
    <div style={{ marginTop: '100px' }} className="mx-3">
      <Nav />
      {paymentStatus ? (
        <Success />
      ) : (
        <Card id="subm" style={{ marginBottom: "60px" }}>
          <CardHeader id='heading1'>Payment Form</CardHeader>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formRollNumber">
              <Form.Label id="label">Roll Number <span className='text-danger'>★</span></Form.Label>
              <Form.Control type="text" value={rollNumber} onChange={rollHandler} required placeholder='enter your roll number' id="control" />
            </Form.Group>

            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label id="label">Select an option <span className='text-danger'>★</span></Form.Label>
              <Form.Control as="select" custom onChange={(e) => setCategory(e.target.value)}  id="control" required>
                <option value="">choose your payment category</option>
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
                <Form.Label id="label">Amount <span className='text-danger'>★</span> <>
                  <Button style={{ borderRadius: "5px", backgroundColor: "orange" }} onClick={handleShow}>
                    See fee details
                  </Button>

                  <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Fee details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="model">
                      <div className='d-flex justify-content-between' style={{ border: "2px solid black" }}>
                      <div className='d-flex'>
                        <p>Total fee:</p>
                        <p>{Data.totalFee}</p>
                        </div>
                        <Button onClick={totalFeeClick} style={{width:"110px"}}>pay</Button>
                      </div>
                      <div className='d-flex justify-content-between' style={{ border: "2px solid black" }}>
                        <div className='d-flex'>
                        <p>Paid fee:</p>
                        <p>{Data.paidFee}</p>
                        </div>
                        <Link to="/history"> <Button style={{width:"110px",padding:"10px"}}>transactions</Button></Link>
                      </div>
                      <div className='d-flex justify-content-between' style={{ border: "2px solid black" }}>
                      <div className='d-flex'>
                        <p>Remaining fee:</p>
                        <p>{parseInt(Data.totalFee) - parseInt(Data.paidFee)}</p></div>
                        <Button style={{width:"110px"}} onClick={remainingFeeClick}>pay</Button>
                      </div>
                      <div className='d-flex justify-content-between' style={{ border: "2px solid black" }}>
                      <div className='d-flex'>
                        <p>installment fee:</p>
                        <p>10036</p></div>
                        <Button style={{width:"110px"}} onClick={installmenClick}>pay</Button>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </></Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  placeholder='enter amount you want to pay now' id="control"
                />
              </div>
              {
                counseling ?
                  (
                    <div className="d-flex " style={{ display: "flex", gap: "10px" }}>
                      <Form.Check
                        type="radio"
                        label="1 installment"
                        onClick={handleCheckboxChange}
                        checked={isChecked}
                        defaultChecked
                        style={{ border: "1px solid black", borderRadius: "5px" }}
                      />
                      <Form.Check
                        type="radio"
                        label="full fee"
                        onClick={fullCheckboxChange}
                        checked={fullCheck}
                        style={{ border: "1px solid black", borderRadius: "5px" }}
                      />
                      <Form.Check
                        type="radio"
                        label="other"
                        onClick={otherCheckboxChange}
                        checked={otherCheck}
                        style={{ border: "1px solid black", borderRadius: "5px" }}
                      />
                    </div>) : (<div>
                      <div className="d-flex " style={{ display: "flex", gap: "10px" }}>
                      <Form.Check
                        type="radio"
                        label="1 installment"
                        onClick={handleCheckboxChange}
                        checked={isChecked}
                        defaultChecked
                        style={{ border: "1px solid black", borderRadius: "5px" }}
                      />
                      <Form.Check
                        type="radio"
                        label="full fee"
                        onClick={fullCheckboxChange}
                        checked={fullCheck}
                        style={{ border: "1px solid black", borderRadius: "5px" }}
                      />
                      </div>
                    </div>)}
            </Form.Group>
            <br />
            <FormGroup style={{ display: "flex", justifyContent: "flex-start" }}>
              <Form.Check
                type='checkbox'
                className='text-primary'
                checked={termsAccepted}
                onClick={() => check()}
                onDoubleClick={() => makeFalse()} />
              <Link to="/terms">Accept our terms and conditions</Link>
            </FormGroup>
            <br />

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Processing...' : 'Proceed to Pay'}
            </Button>

          </Form>
        </Card>
      )}
      <Bottom />
    </div>):(<Login/>)}</>
  );
};

export default PaymentForm;
