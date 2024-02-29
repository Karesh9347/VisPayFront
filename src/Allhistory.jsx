import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem,Table } from 'react-bootstrap';
import back_url from './key;
const Allhistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${back_url}/alltransactions`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>All Transactions</h1>
      {transactions && transactions.length > 0 ? (
        <Table responsive striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Mobile Number</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.rollNumber}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <Table responsive striped bordered hover>
                  <thead>
                          <tr>
                            <th>transaction id</th>
                            <th>amount</th>
                            <th>date</th>
                          </tr>
                        </thead>
                    {user.transactions.map((transaction, tIndex) => (
                      
                        
                        <tbody key={tIndex}>
                          <td>{transaction.transactionId}</td>
                          <td>{transaction.amount}</td>
                          <td>{transaction.date.slice(0,10)}</td>
                        </tbody>
                    
                       
                     
                    ))}
                     </Table>
               
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No transactions available</p>
      )}
    </div>
  );
};

export default Allhistory;
