// frontend/src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import NotFound from './pages/404';

const App: React.FC<{}> = () => {
  return (
    <Router>
    <div className="container-fluid">
      <div className="row flex-nowrap">
       <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
         <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">BackOffice App 1.0</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Home</span>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/users" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people text-white"></i> <span className="ms-1 d-none d-sm-inline text-white">Utilisateurs</span> </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://avatars.githubusercontent.com/u/10771601?v=4" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">Edouard Soubrier</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default App;
