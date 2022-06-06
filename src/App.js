/* dependencies */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/* views */
import HomePage from "./views/HomePage/HomePage";
import News from "./components/News/News";
import Detail from "./components/Detail/Detail";

import NewsPage from "./views/News/NewsPage";
/* Forms */

import LoginView from "./components/LoginForm/LoginView";
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
import Profile from "./components/profile/Profile";
import Categories from "./components/Backoffice/Categories";
import ActivitiesLayout from "./views/Activities/ActivitiesLayout";
import Activity from "./views/Activities/Activity";

function App() {
  return (
    <AdminProvider>
      <AlertProvider>
        <Routes>
          <Route element={<HomePageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="staff" element={<h1>Staff</h1>} />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:id" element={<Detail />} />
            <Route path="testimonials" element={<h1>Testimonials</h1>} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="contribute" element={<h1>Contribute</h1>} />
            <Route path="login" element={<LoginView />} />
            <Route path="signup" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="actividades" element={<ActivitiesLayout />}>
              <Route path=":id" element={<Activity />} />
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
          <Route path="backoffice" element={<Backofficelayout />}>
            <Route index element={<Backoffice />} />
            <Route path="edit-home" element={<HomeForm />} />
            <Route path="edit-organization" element={<OrgForm />} />
            <Route path="news" element={<EditNews />} />
            <Route path="users" element={<Users />} />
            <Route path="categories" element={<Categories />} />
            <Route path="activities" element={<Activities />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </AlertProvider>
    </AdminProvider>
  );
}

export default App;
