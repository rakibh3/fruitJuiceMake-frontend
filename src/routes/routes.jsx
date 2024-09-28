import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/Recipe/RecipeDetails";
import SignIn from "../pages/Auth/SignIn";
import Signup from "../pages/Auth/Signup";

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
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/recipe/details",
        element: <RecipeDetails />,
      },
    ],
  },
]);
