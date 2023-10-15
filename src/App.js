import './App.css';
import React from "react";
import {  Route, Routes } from "react-router-dom";
import NewsFront from './News/NewsFront';
import Login from './LoginComponents/Login';
import ManageNews from './News/ManageNews';
// import Try from './News/Try';
import Register from './LoginComponents/Register';
import Forgot from './LoginComponents/Forgot';
import RegisterReq from './LoginComponents/RegisterReq';
import UpdateNews from './News/UpdateNews';
import CreateNews from './News/CreateNews';
import UpdateUserNews from './News/UpdateUserNews';
import AddNews from './News/AddNews';
import WatchNews from './News/WatchNews';



function App() {

  return (
  
    <Routes>
    <Route path="/" element={<NewsFront />} /> 
    <Route path="go" element={<Login />} />
     <Route path="ManageNews" element={<ManageNews />} /> 
     <Route path="Register" element={<Register />} /> 
     <Route path="Forgot" element={<Forgot />} /> 
     <Route path="RegisterReq" element={<RegisterReq />} />
     <Route path="CreateUserNews" element={<CreateNews />} />
     <Route path="AddNews" element={<AddNews />} />
     <Route path="/UpdateNews/:id" element={< UpdateNews/>} />
     <Route path="/UpdateUserNews/:id" element={< UpdateUserNews/>} />
     <Route path="WatchNews" element={<WatchNews />} /> 
    </Routes>
    
  );
}

export default App;
