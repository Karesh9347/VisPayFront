import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './Nav'
import BottomNavbar from './Bottom'
import { Container,Form,Button,FormControl,FormLabel, FormGroup,Alert} from 'react-bootstrap';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNav from './AdminNav';
import Login from './Login';
const Deletes = () => {
  const [rollNumber, setRollNumber] = useState("");
const storedToken=localStorage.getItem("token")
  const handleDelete = async () => {
    try {
      if(rollNumber.length!==10){
        toast.error("roll number must and should contain 10 chars")
       
      }
      else{

     
      const response = await axios.delete('http://localhost:3001/deleteStudent', {
        data: { rollNumber },
      });

       toast(response.data.message);
    }
      
    } catch (error) {
      console.error(error.message);
      toast.error("Error deleting student");
    }
  
  };
  

  return (
    <>
    {storedToken?(
      <div>
    <AdminNav/>
  
    <div style={{marginTop:"50px"}}>
   
      <Container id="subm" className="card" style={{width:"340px"}}> 
      <center className='card-header'>
      <h2 id="heading">Delete Student</h2>
     </center>
     <div>
      <Form>
        <FormGroup>
      <FormLabel>
        Roll Number:</FormLabel>
        <FormControl type="text" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} placeholder='enter student rollNumber to delete'/> 
        </FormGroup><br/>
        <FormGroup>
      
      <Button onClick={handleDelete} className='bg-danger' style={{width:"300px"}}>Delete Student</Button>
      
        <ToastContainer />
      </FormGroup>
      
      </Form>
      </div>
      </Container>
    
     
    </div>
    </div>):(<Login/>)}
    </>
  );
};

export default Deletes;
