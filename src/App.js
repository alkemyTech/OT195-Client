import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from './views/HomePage/HomePage'
import Header from "./components/Header/";
import LoginForm from './components/LoginForm/LoginForm';
import ContactForm from './components/ContactForm/ContactForm';
import Register from "./components/register/Register";
import { AlertProvider } from "./contexts/alertContext";
import { AdminProvider } from "./contexts/adminContext";
import BackOffice from "./components/Backoffice/Backoffice";
import HomeForm from "./components/HomeForm/HomeForm";


import "bootstrap/dist/css/bootstrap.min.css";
import OrgForm from "./components/OrgForm/OrgForm";

function App() {
  return (
    
    <AdminProvider>
    <AlertProvider>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="staff" element={<ContactForm/>} />
        <Route path="news" element={<h1>News</h1>} />
        <Route path="testimonials" element={<h1>Testimonials</h1>} />
        <Route path="contribute" element={<h1>Contribute</h1>} />
        <Route path="login" element={<LoginForm/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="signup" element={<Register/>} />

        <Route path="backoffice" element={<BackOffice/>} />
        <Route estric path="backoffice/edit-home" element={<HomeForm/>} />
        <Route estric path="backoffice/edit-organization" element={<OrgForm/>} />
      </Routes>
      
    </AlertProvider>
    </AdminProvider>
  );
}

export default App;
