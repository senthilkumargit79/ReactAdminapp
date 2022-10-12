import logo from './logo.svg';
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Sidebar from './Sidebar';
import "./sb-admin-2.css";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Card from './Card';
import {BrowserRouter,Outlet,Route,Routes} from "react-router-dom";
import User from "./User";
function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
    
       <Sidebar/>
       <div id="content-wrapper" class="d-flex flex-column">
       <div id="content">
        <Topbar/>
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/users" element={<User/>}></Route>
        </Routes>
        
       
       
        
        
        </div>
       </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
