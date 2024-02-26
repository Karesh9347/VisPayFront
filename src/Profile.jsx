// Import statements remain the same
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import BottomNavbar from './Bottom';
import { SortNumericUpAlt } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from './key';
import './profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate('/');
    }
  }, [navigate, token]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (token) {
          const res = await axios.get(`${base_url}/user`, {
            headers: {
              'x-token': token,
            },
          });
          setData(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, [token]);

  const reDirect = () => {
    navigate(`/payment?rollNumber=${data.rollNumber}`);
  };

  const setLocal = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!token || !data) {
    return null;
  }

  return (
    <div>
      {token ? (
        <div id="grid">
          <center style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className='p-3 container' id="profile-card">
              <center style={{ marginTop: '-90px' }}>
                <div className='bg-light' style={{ width: '100px', height: '100px', borderRadius: '50%' }} id='image-back'>
                  <img src="./vis.png" alt="" width={90} height={90} />
                </div>
                <p className='h3'>{data.name}</p>
              </center>
              <div className='text-center h6' style={{ textAlign: 'center' }}>
                I am {data.name}, studying 3rd year btech in <br />
                <span className='text-primary'>Visvodaya engineering college</span>
              </div>
              <br />
              <hr />
              <Row lg={2} xl={2}>
                <Col md={6} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="/class.png" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>III CSE WINDOWS</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px' }} id='profile'>
                    <div>
                      <SortNumericUpAlt size={40} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px' }} color='black' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>{data.rollNumber}</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="/class.png" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>{data.mobileNumber}</p>
                    </div>
                  </div>
                  <Button style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "center", alignContent: "center", alignItems: "center", fontSize: "18px" }} id='profile' className='btn-danger fw-bolder' onClick={setLocal}>Log out</Button>
                </Col>
              </Row><br/>
              <div className='text-center h4' style={{ textAlign: 'center' }}>
                FEE DETAILS
                <hr></hr>
              </div>
              <Row lg={2} >
              <Col md={6} className='d-flex'>
              <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "space-between", alignContent: "center", alignItems: "center" }} id='profile' className='btn-light fw-bolder' >
                <div className='d-flex justify-content-center align-items-center'>
                  <img src="https://th.bing.com/th?id=OIP.ixoAhgBxeLE1tauv6llzRAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                  <p className='p-1 mx-1 my-1 h6 fw-bolder'>total fees</p>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span className='bg-primary rounded' >66222</span>
                </div>
              </div>
              <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "space-between", alignContent: "center", alignItems: "center" }} id='profile' className='btn-light fw-bolder' >
                <div className='d-flex justify-content-center align-items-center'>
                  <img src="https://th.bing.com/th?id=OIP.OjqFVHAu2J4lM4KFfKOxcAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                  <p className='p-1 mx-1 my-1 h6 fw-bolder'>next due</p>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span className='bg-primary rounded' >1022</span>
                </div>
              </div>
              </Col>
             <Col md={6} className='d-flex'>
              <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "space-between", alignContent: "center", alignItems: "center" }} id='profile' className='btn-light fw-bolder' >
                <div className='d-flex justify-content-center align-items-center'>
                  <img src="https://p7.hiclipart.com/preview/801/332/60/business-cards-limited-liability-partnership-company-stamp.jpg" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                  <p className='p-1 mx-1 my-1 h6 fw-bolder'>Paid due</p>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span className='bg-primary rounded' >56565</span>
                </div>
              </div>
              <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "space-between", alignContent: "center", alignItems: "center" }} id='profile' className='btn-light fw-bolder' >
                <div className='d-flex justify-content-center align-items-center'>
                  <img src="https://th.bing.com/th/id/OIP.Ai1zpTdiHWkpK_9DsPIbywHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                  <p className='p-1 mx-1 my-1 h6 fw-bolder'>total transactions</p>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <span className='bg-primary rounded' >10</span>
                </div>
              </div>
              </Col>
              </Row>
              <br />
              <div className='text-center h4' style={{ textAlign: 'center' }}>
                IMPORTANT LINKS
                <hr></hr>
                <Row lg={2} xl={2}>
                <Col md={6} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://th.bing.com/th?id=OIP.e6DKoC4NIkF1n7coz7YRagHaFl&w=287&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>FAQ</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px' }} id='profile'>
                    <div>
                      <img src="https://static.vecteezy.com/system/resources/previews/000/355/607/original/documentation-vector-icon.jpg" width={40} height={40} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px' }} color='black' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>Documentation</p>
                    </div>
                  </div>
                </Col>
                <Col md={6} style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://th.bing.com/th/id/OIP.gzcak3piXiaDffpqvK42hgHaFj?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>HELP</p>
                    </div>
                  </div><div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://cdn2.vectorstock.com/i/1000x1000/02/16/about-us-icon-company-info-sign-vector-20390216.jpg" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>About us</p>
                    </div>
                  </div>
                </Col>
              </Row>
              </div>
            </div>
          </center>
          <BottomNavbar />
        </div>
      ) : (
        <center>
          <Spinner animation='grow' variant='primary' />
          <Spinner animation='grow' variant='secondary' />
          <Spinner animation='grow' variant='success' />
          <Spinner animation='grow' variant='danger' />
          <Spinner animation='grow' variant='warning' />
          <Spinner animation='grow' variant='info' />
          <Spinner animation='grow' variant='light' />
          <Spinner animation='grow' variant='dark' />
          <div>
            Maybe your account terminated due to a lack of time. If you want to continue, log out and login again <Button onClick={setLocal}>login</Button>
          </div>
        </center>
      )}
    </div>
  );
};

export default Profile;
