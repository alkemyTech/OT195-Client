/* dependencies */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* views */
import HomePage from "./views/HomePage/HomePage";
import NewsPage from "./views/News/NewsPage";

/* Forms */
import LoginForm from "./components/LoginForm/LoginForm";
import ContactForm from "./components/ContactForm/ContactForm";
import HomeForm from "./components/HomeForm/HomeForm";
import OrgForm from "./components/OrgForm/OrgForm";
import Register from "./components/register/Register";

/* Context Providers */
import { AlertProvider } from "./contexts/alertContext";
import { AdminProvider } from "./contexts/adminContext";

/* Layouts */
import HomePageLayout from "./views/HomePage/HomePageLayout";
import Backofficelayout from "./views/Backoffice/BackofficeLayout";

/* Backoffice */
import Backoffice from "./components/Backoffice/Backoffice";
import EditNews from "./components/Backoffice/News";
import Users from "./components/Backoffice/Users";
import Activities from "./components/Backoffice/Activities";

function App() {
  return (
    <AdminProvider>
      <AlertProvider>
        <Routes>
          <Route element={<HomePageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="staff" element={<ContactForm />} />
            <Route path="news" element={<NewsPage/>} />
            <Route path="testimonials" element={<h1>Testimonials</h1>} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="contribute" element={<h1>Contribute</h1>} />
            <Route path="login" element={<LoginForm />} />
            <Route path="signup" element={<Register />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          <Route path="backoffice" element={<Backofficelayout />}>
            <Route index element={<Backoffice />} />
            <Route path="edit-home" element={<HomeForm />} />
            <Route path="edit-organization" element={<OrgForm />} />
            <Route path="news" element={<EditNews />} />
            <Route path="users" element={<Users />} />
            <Route path="activities" element={<Activities />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </AlertProvider>
    </AdminProvider>
  );
}

export default App;
