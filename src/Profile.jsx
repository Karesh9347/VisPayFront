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
  const storedToken=localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate('/');
    }
  }, [navigate,token]);

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
    }
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
    <>
      {!loading || token ? (
        <div className='body'>
          <div style={{ width: '100%', height: '130px' }} id='back'></div>
          <center style={{ marginTop: '-70px' }}>
            <div className='bg-light' style={{ width: '100px', height: '100px', borderRadius: '50%' }} id='image-back'>
              <img src="./vis.png" alt="" width={90} height={90} />
            </div>
            <p className='h3'>{data.name}</p>
          </center>
          <Row lg={3} id="row">


            <Col md={4} className='mt-4'>

              <Card className='p-5' id="card">

                <div className='text-ceter  h6' style={{ textAlign: 'center' }}>
                  I am {data.name}, studying 3rd year btech
                  in <br />
                  <span className='text-primary'>Visvodaya engineering college</span>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
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
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="/class.png" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6'>{data.mobileNumber}</p>
                    </div>
                  </div>
                  <Button style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "center", alignContent: "center", alignItems: "center", fontSize: "18px" }} id='profile' className='btn-danger fw-bolder' onClick={setLocal}>Log out</Button>
                </div>
                <br />

              </Card>
            </Col>
            <Col md={4} className='mt-4'>
              <Card className='p-5' id="card">

                <div className='text-ceter  h6' style={{ textAlign: 'center' }}>
                  FEE DETAILS
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://th.bing.com/th?id=OIP.ixoAhgBxeLE1tauv6llzRAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>TOTAL FEES <span className='bg-success rounded mx-2'>42500</span></p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px' }} id='profile'>
                    <div>
                      <img src="https://th.bing.com/th?id=OIP.OjqFVHAu2J4lM4KFfKOxcAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" width={40} height={40} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px' }} color='black' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>next due<span className='bg-warning rounded mx-3'>10360</span></p>
                    </div>
                  </div>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://p7.hiclipart.com/preview/801/332/60/business-cards-limited-liability-partnership-company-stamp.jpg" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>Paid due <span className='bg-success rounded mx-3'>123445</span></p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px', justifyContent: "center", alignContent: "center", alignItems: "center" }} id='profile' className='btn-light fw-bolder' >
                    <div>
                      <img src="https://th.bing.com/th/id/OIP.Ai1zpTdiHWkpK_9DsPIbywHaHa?rs=1&pid=ImgDetMain" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>Paid due <span className='bg-success rounded mx-3'>123445</span></p>
                    </div>
                  </div>
                </div>
                <br />

              </Card>
            </Col>
            <Col md={4} className='mt-4 mb-5'>
              <Card className='p-5' id="card">
                <div className='text-ceter  h4' style={{ textAlign: 'center' }}>
                  IMPORTANT LINKS
                </div><br />

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>

                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://th.bing.com/th?id=OIP.e6DKoC4NIkF1n7coz7YRagHaFl&w=287&h=217&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>FAQ</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px' }} id='profile'>
                    <div>
                      <img src="https://th.bing.com/th/id/OIP.gzcak3piXiaDffpqvK42hgHaFj?rs=1&pid=ImgDetMain" width={40} height={40} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px' }} color='black' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>HELP</p>
                    </div>
                  </div>
                </div>
                <br />
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>

                  <div id='profile' style={{ display: 'flex', border: '1px solid yellowgreen', width: '400px', padding: '3px', borderRadius: '10px' }}>
                    <div>
                      <img src="https://static.vecteezy.com/system/resources/previews/000/355/607/original/documentation-vector-icon.jpg" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green' }} width={40} height={40} color='white' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>documentation</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', border: '1px solid green', width: '400px', padding: '3px', borderRadius: '10px' }} id='profile'>
                    <div>
                      <img src="https://cdn2.vectorstock.com/i/1000x1000/02/16/about-us-icon-company-info-sign-vector-20390216.jpg" width={40} height={40} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px' }} color='black' />
                    </div>
                    <div>
                      <p className='p-1 mx-1 my-1 h6 fw-bolder'>About us</p>
                    </div>
                  </div>
                </div>

                <br />

              </Card>
            </Col>
          </Row>
          <div>
            <BottomNavbar />
          </div>
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
            may be your account terminated due to lack of time.if you want to continue login out and login again <Button onClick={setLocal}>login</Button>
          </div>
        </center>

      )}
    </>
  );
};

export default Profile;
