import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

import DashboardMainPage from "../components/Admin/Dashboard/AdminDashboard";
import QuizCreator from "../components/Admin/Quizz/CreateNewQuizz";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import React from "react";
import LoginForm from "../Pages/Auth/LoginForm";
import SignUpPage from "../Pages/Auth/SignUpPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage";
import OtpPage from "../Pages/Auth/OtpPage";
import ResetPasswordPage from "../Pages/Auth/ResetPasswordPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import QuizInterface from "../Pages/QuizInterface/QuizInterface";
import QuizResultPage from "../Pages/QuizInterface/QuizResultPage";
import Topics from "../Pages/Topics/Topics";
import MovingCarTabs from "../Pages/Overview/MovingCarTabs";
import Features from "../components/Features/Features";
import Terms from "../components/Terms&Policy/Terms";
import Privacy from "../components/Terms&Policy/Privacy";
import ContactPage from "../components/ContactPage/ContactPage";
import About from "../components/About/About";
import PricingSection from "../components/PricingSection/PricingSection";
import Profile from "../Pages/Home/Profile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404</h1>,
  },
  {
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/otp",
        element: <OtpPage />,
      },
      {
        path: "/reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "/quiz",
        element: <QuizInterface />,
      },
      {
        path: "/quiz-result",
        element: <QuizResultPage />,
      },
      {
        path: "/topics",
        element: <Topics />,
      },
      {
        path: "/overview/:id",
        element: <MovingCarTabs />,
      },
      {
        path: "/features",
        element: <Features />,
      },
      {
        path: "/terms",
        element: <Terms />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <PricingSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/admin",
    element: <DashboardMainPage />,
  },
  {
    path: "/admin/create-quizz",
    element: <QuizCreator />,
  },
]);
