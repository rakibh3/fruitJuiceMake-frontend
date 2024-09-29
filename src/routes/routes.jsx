import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/Recipe/RecipeDetails";
import SignIn from "../pages/Auth/SignIn";
import Signup from "../pages/Auth/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/signin",
        element: (
          <PublicRoute>
            <SignIn />,
          </PublicRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <Signup />,
          </PublicRoute>
        ),
      },
      {
        path: "/recipes",
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
