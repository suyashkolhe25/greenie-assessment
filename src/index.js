import React from 'react';
import ReactDOM from 'react-dom/client';  

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import AccountCreation from './tabs/AccountCreation';
// import UserDetails from './tabs/UserDetails';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />}/>  
        <Route path="/accountCreation" element={<AccountCreation />} />
        {/* <Route path="/userDetails" element={<UserDetails />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
