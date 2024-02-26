import React, { useState, useEffect } from 'react';
import { Badge, Button, Card, Container, Spinner, Table } from 'react-bootstrap';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import BottomNavbar from './Bottom';
import './profile.css'
import { FileEarmarkTextFill, FileText, GooglePlay } from 'react-bootstrap-icons';
import { base_url } from './key';

const History = () => {
    const [text, setText] = useState("All Fee Payments History");
    const [token, setToken] = useState(null);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const newData=data.sort();
   
    var totalamt=0;
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
        navigate("/payment")
    }

    return (
        <div className="mb-5">
            <h2 className="mt-4 mb-4 text-primary">{text}</h2>
            <hr></hr>
            {loading ? (
                <center>
                    <Spinner animation='grow' variant='primary' />
                    <Spinner animation='grow' variant='secondary' />
                    <Spinner animation='grow' variant='success' />
                    <Spinner animation='grow' variant='danger' />
                    <Spinner animation='grow' variant='warning' />
                    <Spinner animation='grow' variant='info' />
                    <Spinner animation='grow' variant='light' />
                    <Spinner animation='grow' variant='dark' />
                </center>
            ) : newData.length > 0 ? (
                <div>
                    <div>
                       <p className='p-3 h3 bg-info rounded-5'>total amount paid till now <span className='text-dark'><Badge bg="success">{totalamt}₹</Badge></span></p>
                        </div>
                    <div>
                        
                <Table responsive striped bordered hover className="custom-table">
                    <thead>
                        <tr>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Category Fee</th>
                            <th>Date</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                   
                   data.map((item) => (
                            <tr key={item._id}>
                                <td>{item.transactionId}</td>
                                <td>{item.amount}₹</td>
                                <td>{item.categoryFee}</td>
                                <td>{item.date}</td>
                                <td><Badge bg="success">sucess</Badge></td>
                            </tr>
                             ))}
                           
                       
                    </tbody>
                </Table> 
               
                </div>
              
               </div>
               
            ) : (
                <div>
                    <center className="text-center mt-5">
                        <FileEarmarkTextFill size={80} color="blue" />
                        <p className="mt-2 h2 text-danger">No transaction history available</p>
                    </center>
                    <center style={{ marginTop: "300px" }}>
                        <Button onClick={reDirect}> <img src='https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-44/64/x-45-512.png' width={40} height={40} color='blue' />
                        </Button>
                        <p>pay now</p>
                    </center>
                </div>
            )}
            <BottomNavbar />
        </div>
    );
};

export default History;
