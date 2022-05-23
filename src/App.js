import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ExampleAlerts from "./components/Examples/ExampleAlerts"
import HomePage from './views/HomePage/HomePage'
import { AlertProvider } from "./contexts/alertContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    <AlertProvider>
      <ExampleAlerts />
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="staff" element={<h1>Staff</h1>} />
        <Route path="news" element={<h1>News</h1>} />
        <Route path="testimonials" element={<h1>Testimonials</h1>} />
        <Route path="contribute" element={<h1>Contribute</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </AlertProvider>
    </>
  );
}

export default App;
