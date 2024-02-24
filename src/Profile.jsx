import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import BottomNavbar from './Bottom';
import { SortNumericUpAlt } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { base_url } from './key';
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
      {!loading && token ? (
        <div className='body' style={{ marginBottom: '-100px' }}>
          <div style={{ width: '100%', height: '130px' }} id='back'></div>
          <center style={{ marginTop: '-70px' }}>
            <div className='bg-light' style={{ width: '100px', height: '100px', borderRadius: '50%' }} id='image-back'>
              <img src="./vis.png" alt="" width={90} height={90} />
            </div>
            <p className='h3'>{data.name}</p>
          </center>
          <Row lg={2}>
            <Col md={6}>
              <Card>
                <Container className='p-5'>
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
                  <div className='d-flex justify-content-evenly'>
                    <div style={{ display: 'flex', border: '1px solid green', width: '330px', padding: '3px', borderRadius: '10px' }} id='profile'>
                      <div>
                        <SortNumericUpAlt size={40} style={{ backgroundColor: 'green', borderRadius: '50%', padding: '5px' }} color='black' />
                      </div>
                      <div>
                        <p className='p-1 mx-1 my-1 h6'>9{data.mobileNumber}</p>
                      </div>
                    </div>
                    <div>
                      <Button className='btn-danger' onClick={setLocal}>
                        Log out
                      </Button>
                    </div>
                  </div>
                </Container>
              </Card>
            </Col>
            <Col md={6}>
              <Card>
                <Container className='p-3'>
                  <div>
                    <h2 className='text-center'>FEE DETAILS</h2>
                    <center>
                      <div id='profile' style={{ display: 'flex', justifyContent: 'space-between', border: '1px solid yellowgreen', width: '330px', padding: '3px', borderRadius: '10px' }}>
                        <div style={{ display: 'flex' }}>
                          <div>
                            <img src="/fee.png" alt="" style={{ borderRadius: '50%', padding: '5px', backgroundColor: 'green', marginTop: '6px' }} width={40} height={40} color='white' />
                          </div>
                          <div>
                            <p className='p-1 mx-1 my-1 h6'>
                              Total fee: 42500
                              <br />
                              Due fee: 10036
                            </p>
                          </div>
                        </div>
                        <div style={{ marginTop: '6px' }} className='text-center'>
                          <Button onClick={reDirect}>Pay</Button>
                        </div>
                      </div>
                      <br />
                    </center>
                  </div>
                </Container>
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
