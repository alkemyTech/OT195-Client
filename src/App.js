import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ExampleLoader from "./components/Examples/ExampleLoader";
import ExampleAlerts from "./components/Examples/ExampleAlerts"
import Header from "./components/Header/";
import Footer from "./components/Footer/Footer";
import LoginForm from './components/LoginForm/LoginForm';
import ContactForm from './components/ContactForm/ContactForm';
import Register from "./components/register/Register";
import { AlertProvider } from "./contexts/alertContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <AlertProvider>
      <Header></Header>
      <ExampleLoader />
      <ExampleAlerts />
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="staff" element={<h1>Staff</h1>} />
        <Route path="news" element={<h1>News</h1>} />
        <Route path="testimonials" element={<h1>Testimonials</h1>} />
        <Route path="contribute" element={<h1>Contribute</h1>} />
        <Route path="login" element={<LoginForm/>} />
        <Route path="contact" element={<ContactForm/>}/>
        <Route path="signup" element={<Register/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </AlertProvider>
    </>
  );
}

export default App;
