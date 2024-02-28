
import React, { useState, createContext } from 'react';
import PaymentForm from './PaymentForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Success from './Success'
import Failure from './Failure';
import Profile from './Profile';
import History from './History';
import Login from './Login';
import Registration from './Registeration';
import TermsAndConditions from './Terms';
import Allhistory from './Allhistory';
import Deletes from './Deletes';
export const store = createContext();

function App() {
  
  const [token, setToken] = useState(null);
  const [category, setCategory] = useState("college fee");
  return (
    <store.Provider value={{ token, setToken,}}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/payment"
            element={
              <PaymentForm 
              category={category}
              setCategory={setCategory}
              />
            }
          ></Route>

          <Route path="/success" element={<Success category={category}
              setCategory={setCategory} />}></Route>
          <Route path="/failure" element={<Failure />}></Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/terms" element={<TermsAndConditions/>}/>
          <Route path="/allTransactions" element={<Allhistory/>}/>
          <Route path="/studentDelete" element={<Deletes/>}/>
        </Routes>
      </BrowserRouter >
    </store.Provider>

  );
}

export default App;
