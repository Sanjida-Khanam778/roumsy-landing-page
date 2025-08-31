import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginForm from "../Pages/Auth/LoginForm";
import SignUpPage from "../Pages/Auth/SignUpPage";
import ForgotPasswordPage from "../Pages/Auth/ForgotPasswordPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>Home</h1>,
      },
    ],
  },
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
    
  }
]);
