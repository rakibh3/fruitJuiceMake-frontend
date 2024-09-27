import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import RecipeDetails from "../pages/Recipe/RecipeDetails";

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
        path: "/recipe/details",
        element: <RecipeDetails />,
      },
    ],
  },
]);
