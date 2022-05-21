import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ExampleLoader from "./components/Examples/ExampleLoader";

function App() {
  return (
    <>
      <ExampleLoader />
      <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path="home" element={<h1>Home</h1>} />
        <Route path="staff" element={<h1>Staff</h1>} />
        <Route path="news" element={<h1>News</h1>} />
        <Route path="testimonials" element={<h1>Testimonials</h1>} />
        <Route path="contribute" element={<h1>Contribute</h1>} />
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
