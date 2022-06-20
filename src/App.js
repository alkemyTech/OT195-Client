/* dependencies */
import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* views */
import HomePage from "./views/HomePage/HomePage";
import Detail from "./components/Detail/Detail";
import NewsPage from "./views/News/NewsPage";

import LoginView from "./components/LoginForm/LoginView";
import ContactForm from "./components/ContactForm/ContactForm";
import HomeForm from "./components/HomeForm/HomeForm";
import OrgForm from "./components/OrgForm/OrgForm";
import Register from "./components/register/Register";
import StaffPage from "./components/Staff/StaffPage";

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
import Testimonials from "./components/Backoffice/Testimonials";
import ActivitiesLayout from "./views/Activities/ActivitiesLayout";
import Activity from "./views/Activities/Activity";
import ContactsList from "./components/Backoffice/ContactsList";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const user = useSelector(({ user }) => user.entity);
  const location = useLocation();

  return (
    <AdminProvider>
      <AlertProvider>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route element={<HomePageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="staff" element={<StaffPage/>} />
              <Route path="news" element={<NewsPage />} />
              <Route path="news/:id" element={<Detail />} />
              <Route path="testimonials" element={<h1>Testimonials</h1>} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="contribute" element={<h1>Contribute</h1>} />
              <Route path="login" element={<LoginView />} />
              <Route path="signup" element={<Register />} />
              <Route
                path="profile"
                element={
                  <ProtectedRoute
                    isAllowed={!!window.localStorage.getItem("token")}
                  >
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="actividades" element={<ActivitiesLayout />}>
                <Route path=":id" element={<Activity />} />
              </Route>
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
            <Route element={<ProtectedRoute isAllowed={user.roleId === 1} />}>
              <Route path="backoffice" element={<Backofficelayout />}>
                <Route index element={<Backoffice />} />
                <Route path="edit-home" element={<HomeForm />} />
                <Route path="edit-organization" element={<OrgForm />} />
                <Route path="news" element={<EditNews />} />
                <Route path="users" element={<Users />} />
                <Route path="categories" element={<Categories />} />
                <Route path="testimonials" element={<Testimonials />} />
                <Route path="activities" element={<Activities />} />
                <Route path="contacts" element={<ContactsList />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
              </Route>
            </Route>
          </Routes>
        </AnimatePresence>
      </AlertProvider>
    </AdminProvider>
  );
}

export default App;
