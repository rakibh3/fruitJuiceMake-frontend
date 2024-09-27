import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/Recipe/RecipeDetails";
import SignIn from "../pages/Auth/SignIn";

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
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/recipe/details",
        element: <RecipeDetails />,
      },
    ],
  },
]);
