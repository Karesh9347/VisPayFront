import React, { useState, useEffect,useRef } from 'react';
import { Badge, Button, Card, Container, Spinner, Table, NavDropdown, Navbar, Nav, NavItem, NavLink, DropdownItem } from 'react-bootstrap';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import BottomNavbar from './Bottom';
import './profile.css';
import { FileEarmarkTextFill, FileText, GooglePlay, Search, SearchHeart, Send } from 'react-bootstrap-icons';
import { base_url } from './key';
import Login from './Login';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const History = () => {
 const profileRef=useRef(null)
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const newData = data.reverse();

  var totalamt = 0;
  let i;

  for (let i = 0; i < newData.length; i++) {
    totalamt += newData[i].amount;
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (token) {
      axios
        .get(`${base_url}/user`, {
          headers: {
            'x-token': token,
          },
        })
        .then((res) => {
          setData(res.data.transactions);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  }, [token]);

  const reDirect = () => {
    navigate("/payment");
  };
  const pdfDownload = async () => {
    try {
      const contentRef = profileRef.current;
      if (contentRef) {
        const canvas = await html2canvas(contentRef, { scale: 3});
        const imgData = canvas.toDataURL('image/png');
  
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
        });
  
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 210); 
        pdf.save('transaction_history.pdf');
      }
    } catch (err) {
      console.error('Error at downloading PDF', err);
    }
  };

  return (
    <>{
      token?(
    <div className="mb-5">

     <div className='d-flex justify-content-between bg-primary p-1 fixed-top'>
      <div className='mx-3'>
        <h6 ID="heading1">payment history</h6>
      </div>
      <div className='d-flex mx-3'>
        <input className='form-control' placeholder='search your transaction id'/><Button className='bg-dark'><Search></Search></Button>
      </div>
     </div>

      

      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : newData.length > 0 ? (
       <div  style={{marginTop:"70px"}}>
         
         
          
          <div className='rounded m-2'>
            <Table responsive striped bordered hover className="custom-table rounded" ref={profileRef}>
              <thead>
                <tr>
                  <th>TransID</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item._id}>
                    <td>{item.transactionId}</td>
                    <td>{item.amount}₹</td>
                    <td>{item.categoryFee}</td>
                    <td>{item.date.slice(0, 10)}</td>
                    <td>
                      <Badge bg="success">Success</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-evenly">
            
          <Button variant='outline-primary'>  <p className='text-dark'>
            
          total amount= <Badge bg="success">{totalamt}₹</Badge>
            </p>
            </Button>
            <div>
            <Button onClick={pdfDownload} className='p-3 ' >pdf download</Button>
          </div>
          </div>
         
        </div>
      ) : (
        <div className="text-center mt-5">
          <FileEarmarkTextFill size={80} color="blue" />
          <p className="mt-2 h2 text-danger">No transaction history available</p>
          <Button variant="primary" size="lg" onClick={reDirect}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-44/64/x-45-512.png"
              width={40}
              height={40}
              alt="Pay Now"
              className="mr-2"
            />
            Pay now
          </Button>
        </div>
      )}
      <BottomNavbar />
    </div>):(<Login/>)}</>
  );
};

export default History;
