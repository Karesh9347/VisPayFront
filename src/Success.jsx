import React, { useEffect, useState, useRef } from 'react';
import { Card, Button, Container, Spinner,Alert } from 'react-bootstrap';
import Nav from './Nav';
import BottomNavbar from './Bottom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {back_url} from './Key'



const Success = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const userId = searchParams.get('userId');
  const [token, setToken] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const amount = localStorage.getItem('amount');
const category=localStorage.getItem('category')

  const profileRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate('/');
    }
  }, [navigate]);

  useEffect(() => {
    if (token) {
      axios.get(`${back_url}/user`, { headers: { 'x-token': token } })
        .then((res) => setData(res.data))
        .catch((err) => console.error('Error fetching user data:', err));
    }
  }, [token]);

  useEffect(() => {
    if (data && userId) {
      const addTransaction = async () => {
        try {
          const response = await axios.post(`${back_url}/addTransaction/${data.rollNumber}`, {
            transactionId: userId,
            amount,
            categoryFee: category,

          });

          if (response.status === 200) {
            
      alert("transaction added successfully")
         
          } else {
           
       alert(response.data.message)
            alert('Error adding transaction:', response.data.error);
          
          }
        } catch (error) {
          console.error('Error adding transaction:', error);
        }
      };

      addTransaction();

    }
  }, [data, userId]);

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Payment Success',
          text: `PBR VITS ${category} Payment successfully completed`,
          url: window.location.href,
        })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser');
    }
  };

  const downloadPDF = async () => {
    setLoading(true);

    try {
      const contentRef = profileRef.current;

      if (contentRef) {
        const canvas = await html2canvas(contentRef);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
        pdf.save('payment_receipt.pdf');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: '100px' ,marginBottom:"100px"}}>
      <Nav />
     
      
      <Container style={{ width: '330px' }} id="sub" className='bg-light'>
      
      
        {token && data ? (
          <Card style={{ backgroundColor: 'lightgreen' }}>
            <Card.Header className='text-success'>Payment successfully completed</Card.Header>
            <Card.Body ref={profileRef}>
              <p className='h6'>Name: <span className="text-danger">{data.name}</span> </p>
              <hr />
              <p className='h6'>Roll Number: <span className="text-danger">{data.rollNumber}</span> </p>
              <hr />
              <p className='h6'>Mobile number: <span className="text-danger">{data.mobileNumber}</span> </p>
              <hr />
              <p className='h6'>Amount: <span className="text-danger">{amount}</span> </p>
              <hr />
              <p className='h6'>Category of fee: <span className="text-danger">{category}</span> </p><hr />
              <p className='h6'>status: <span className="text-danger">success</span> </p>
              <hr />
              <p className='h6'>Transaction ID: <span className="text-danger">{userId}</span> </p>
              <hr />
            </Card.Body>
           
          </Card>
        ) : null}
        <div style={{ display: "flex", justifyContent: "flex-start", gap: "10px", marginTop: "20px" }}>
         
          <Button variant='primary' onClick={share}>
            Share
          </Button>
          <Button variant='success' onClick={downloadPDF} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Download PDF'}
          </Button>
        </div>
      </Container>
      <BottomNavbar />
    </div>
  );
};

export default Success;
