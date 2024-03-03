import React from 'react';
import { XOctagonFill } from 'react-bootstrap-icons';
import Nav from './Nav';
import BottomNavbar from './Bottom';
import Login from './Login';
import { store } from './App';


const Failure = () => {
  const storedToken=localStorage.getItem("token")
  return (
    <div>{storedToken?
      (
    <div className="container">
      <Nav/>
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-6 text-center">
          <XOctagonFill style={{ fontSize: '5rem', color: 'red' }} />
          <h2 className="mt-3">payment failed</h2>
        </div>
      </div>
      <BottomNavbar/>
    </div>):(<Login/>)}</div>
  );
}

export default Failure;
