import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import DashboardMainPage from "../components/Admin/Dashboard/AdminDashboard";
import QuizCreator from "../components/Admin/Quizz/CreateNewQuizz";

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
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    path: "/admin",
    element: <DashboardMainPage />,
  },
  {
    path: "/admin/create-quizz",
    element: <QuizCreator />,
  },
  {
    path: "/admin/terms&conditions",
    element: <div>Terms</div>,
  },
  {
    path: "/admin/privacy-policies",
    element: <div>Privacy</div>,
  },
]);
