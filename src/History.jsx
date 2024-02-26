import React, { useState, useEffect } from 'react';
import { Badge, Button, Card, Container, Spinner, Table } from 'react-bootstrap';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import BottomNavbar from './Bottom';
import './profile.css';
import { FileEarmarkTextFill, FileText, GooglePlay, Send } from 'react-bootstrap-icons';
import { base_url } from './key';

const History = () => {
  const [text, setText] = useState("All Fee Payments History");
  const [token, setToken] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const newData = data.sort();

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

  return (
    <div className="mb-5">
    <h2 className="mt-4 mb-4 text-primary">{text}</h2>
    <hr />

    {loading ? (
      <div className="text-center mt-4">
        <Spinner animation="border" variant="primary" />
      </div>
    ) : newData.length > 0 ? (
      <div>
        <div className="p-3 bg-info rounded-5 mb-3">
          <p className="h3 text-dark">
            Total amount paid till now{' '}
            <Badge bg="success">{totalamt}₹</Badge>
          </p>
        </div>
        <div>
          <Table responsive striped bordered hover className="custom-table">
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
  </div>
  );
};

export default History;
