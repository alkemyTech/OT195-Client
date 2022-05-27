import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ExampleAlerts from "./components/Examples/ExampleAlerts";
import HomePage from "./views/HomePage/HomePage";
import Header from "./components/Header/";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/LoginForm/LoginForm";
import ContactForm from "./components/ContactForm/ContactForm";
import Register from "./components/register/Register";
import { AlertProvider } from "./contexts/alertContext";
import { HomeProvider } from "./contexts/homeContext";
import BackOffice from "./components/Backoffice/Backoffice";
import HomeForm from "./components/HomeForm/HomeForm";

import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <>
    
    <AlertProvider>
      <Header/>
      <Routes>
        <Route path='/' element={
        <HomeProvider>
          <HomePage />
        </HomeProvider>} />
        <Route path="/home" element={
        <HomeProvider>
          <HomePage />
        </HomeProvider>
      } />
        <Route path="staff" element={<ContactForm/>} />
        <Route path="news" element={<h1>News</h1>} />
        <Route path="testimonials" element={<h1>Testimonials</h1>} />
        <Route path="contribute" element={<h1>Contribute</h1>} />
        <Route path="login" element={<LoginForm/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="signup" element={<Register/>} />

        <Route path="backoffice" element={<BackOffice/>} />
        <Route estric path="backoffice/Slides" element={
        <HomeProvider>
          <HomeForm/>
        </HomeProvider>} />
      </Routes>
      
    </AlertProvider>
    </>
  );
}

export default App;
