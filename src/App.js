import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ExampleAlerts from "./components/Examples/ExampleAlerts"
import HomePage from './views/HomePage/HomePage'
import { AlertProvider } from "./contexts/alertContext";
import { HomeProvider } from "./contexts/homeContext";
import Header from "./components/Header";
import Register from "./components/register/Register";
import LoginForm from "./components/LoginForm/LoginForm";
import BackOffice from "./components/Backoffice/Backoffice";
import HomeForm from "./components/HomeForm/HomeForm";


import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <AlertProvider>
      {/* <ExampleAlerts /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="staff" element={<><Header/><h1>Staff</h1></>} />
        <Route path="news" element={<><Header/><h1>News</h1></>} />
        <Route path="testimonials" element={<><Header/><h1>Testimonials</h1></>} />
        <Route path="contribute" element={<><Header/><h1>Contribute</h1></>} />
        <Route path="login" element={<><Header/> <LoginForm/></>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="signup" element={<>
          <Register/>
          <ExampleAlerts/>

        </>

      } />

        <Route path="backoffice" element={<BackOffice/>} />
        <Route path="backoffice/:Slides" element={
        <HomeProvider>
          <HomeForm/>
          
        </HomeProvider>} />
      </Routes>
      
    </AlertProvider>
    </>
  );
}

export default App;
