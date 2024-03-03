import React, {createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaymentForm from './PaymentForm';
import Success from './Success';
import Failure from './Failure';
import Profile from './Profile';
import History from './History';
import Login from './Login';
import Registration from './Registeration';
import TermsAndConditions from './Terms';
import Allhistory from './Allhistory';
import Deletes from './Deletes';
import Doc from './Doc';
import Update from './Update'
import About from './About';
import Help from './Help';
import Admin from './Admin';
import Charts from './Charts';
import NotFound from './404';
export const store = createContext();

function App() {
  
  const token=localStorage.getItem("token")


  return (
    <store.Provider value={{ token}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/documentation" element={<Doc />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/help" element={<Help/>}/>
         
            <>
              <Route
                path="/success"
                element={<Success />}
              />
              <Route path="/failure" element={<Failure />} />
           
              <Route path="/history" element={<History />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/dashboard" element={<Admin/>}/>
              <Route path="/allTransactions" element={<Allhistory />} />
              <Route path="/studentDelete" element={<Deletes />} />
              <Route path="/charts" element={<Charts/>} />
             <Route path="/update" element={<Update/>}/>
              <Route
                path="/payment"
                element={<PaymentForm />}
              />
            </>
            <Route path="*" Component={NotFound}/>
         
        </Routes>
      </BrowserRouter>
    </store.Provider>
  );
}

export default App;
