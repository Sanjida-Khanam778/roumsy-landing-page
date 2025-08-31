import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginForm from "../Pages/Auth/LoginForm";

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
    element: <h1>Register</h1>,
  },
]);
