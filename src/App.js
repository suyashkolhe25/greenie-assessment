import React, { useState } from "react";

import Navbar from "./Components/Navbar";
import './App.css';

import userData from "./userData";
import UserTable from "./userTable";

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      
      <div className="container">
        <div className="row height d-flex justify-content-center align-items-center">
          <div className="col-md-8">
            <div className="search">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="Search..."
                className="form-control"
                value={searchTerm}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <UserTable searchTerm={searchTerm} userData={userData} />
      <br />
    </div>
  );
}

export default App;
