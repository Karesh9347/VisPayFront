
import { Card, Col, Row,Table } from 'react-bootstrap';
import {useEffect,useReducer,useState} from 'react';
import './Admin.css';
import Login from './Login';
import AdminNav from './AdminNav';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { base_url } from './key';
function Admin() {
    const [transactions, setTransactions] = useState([]);
 const storedToken=localStorage.getItem("token")
 const [totalTransactions,setTotalTransactions]=useState();
 useEffect(() => {
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${base_url}/alltransactions`);
      setTransactions(response.data);

      // Calculate total transactions
      const totalAmt = response.data.reduce((acc, user) => {
        const transaction = user.transactions || [];

        const allTotal = transaction.reduce((userAcc, transaction) => {
          return userAcc + transaction.amount;
        }, 0);

        return acc + allTotal;
      }, 0);

      setTotalTransactions(totalAmt);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  fetchTransactions();
}, []);
  return (
    <>
    {storedToken?(
      <div>
    <AdminNav/>
      <Container>
        <Row lg={3} className='g-3'>
          <Col>
            <Card className='bg-success'>
              <Card.Header className='h3'>total amount</Card.Header>
              <Card.Body className='d-flex'>
                <img src="./money.png" alt="nri" width={100} height={100} />
                <h2 className='mt-4'>{totalTransactions}RS  </h2>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-warning'>
              <Card.Header className='h3'>Nri student</Card.Header>
              <Card.Body className='d-flex '>
                <img src="./nri.png" alt="nri" width={100} height={100} />
                <h2 className='mt-4'>3000 members</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='bg-primary'>
              <Card.Header className='h3'>counselling students</Card.Header>
              <Card.Body className='d-flex'>
                <img src="./student.png" alt="nri" width={80} height={80} className='bg-light rounded-5'/>
                <h2 className='mt-4 '>50000 members</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          
          <Col >
         
      
          {transactions && transactions.length > 0 ? (
        <Table responsive striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Mobile Number</th>
              <th>admission type</th>
              <th>class</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.rollNumber}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.admissionType}</td>
                <td>{user.year}rd {user.section}</td>
                </tr>
              ))}
              </tbody>
              </Table>):null}
          </Col>
        </Row>
      </Container>
      </div>):(<Login/>)}
    </>
  );
}

export default Admin;
