import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ExampleAlerts from "./components/Examples/ExampleAlerts";
import HomePage from "./views/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import ContactForm from "./components/ContactForm/ContactForm";
import Register from "./components/register/Register";
import { AlertProvider } from "./contexts/alertContext";
import { HomeProvider } from "./contexts/homeContext";
import HomeForm from "./components/HomeForm/HomeForm";

import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/profile/Profile";
import HomePageLayout from "./views/HomePage/HomePageLayout";
import Backofficelayout from "./views/Backoffice/BackofficeLayout";
import Backoffice from "./components/Backoffice/Backoffice";
import News from "./components/Backoffice/News";
import Users from "./components/Backoffice/Users";

function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route element={<HomePageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="staff" element={<ContactForm />} />
            <Route path="news" element={<h1>News</h1>} />
            <Route path="testimonials" element={<h1>Testimonials</h1>} />
            <Route path="contribute" element={<h1>Contribute</h1>} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<Register />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          <Route path="backoffice" element={<Backofficelayout />}>
            <Route index element={<Backoffice />} />
            <Route path="slides" element={<HomeForm />} />
            <Route path="news" element={<News />} />
            <Route path="users" element={<Users />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
