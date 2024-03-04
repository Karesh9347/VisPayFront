import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem,Table,Button } from 'react-bootstrap';
import AdminNav from './AdminNav';
import './App.css'
import Login from './Login';
import { base_url } from './key';
import './Admin.css'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Allhistory = () => {
   const profileRef=useRef();
  const [transactions, setTransactions] = useState([]);
  const storedToken=localStorage.getItem("token")
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${base_url}/alltransactions`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);
   const pdfDownload = async () => {
    try {
      const contentRef = profileRef.current;
      if (contentRef) {
        const canvas = await html2canvas(contentRef, { scale: 1 });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'mm',
          format: 'a4',
        });
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
        pdf.save('student_transactions.pdf');
      }
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div>{
      storedToken?(
      <div>
      <AdminNav/>
        <div className='heading-container' style={{display:"flex",justifyContent:"space-evenly"}}>
      <h1 className='heading'>All Transactions</h1>
      <div>
         <Button onClick={pdfDownload}>download pdf</Button>
        
        </div>
      </div>
     
      {transactions && transactions.length > 0 ? (
        <Table responsive striped bordered hover className="custom-table" ref={profileRef}>
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
    </div>):(<Login/>)}</div>
  );
};

export default Allhistory;
