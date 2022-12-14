import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "ErrorPage";
import Login from "components/auth/Login";
import Signup from "components/auth/Signup";
import Dashboard from "components/dashboard/Dashboard";
import Practitioner from "components/dashboard/Practitioner";
import AuthRoute from "hoc/AuthenticatedRoute";
import Auth from "components/auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/practitioner",
        element: <AuthRoute><Practitioner /></AuthRoute>,
      },
      {
        path: "/login",
        element: <Auth><Login /></Auth>,
      },
      {
        path: "/signup",
        element: <Auth><Signup /></Auth>,
      },
    ],
  },
]);

export default router;
