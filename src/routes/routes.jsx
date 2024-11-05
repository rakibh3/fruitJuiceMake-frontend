import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import PrivateRoute from '@/routes/PrivateRoute'
import PublicRoute from '@/routes/PublicRoute'
import Home from '@/pages/Home/Home'
import SignIn from '@/pages/Auth/SignIn'
import Signup from '@/pages/Auth/Signup'
import AddRecipe from '@/pages/Recipe/AddRecipe'
import RecipeDetails from '@/pages/Recipe/RecipeDetails'
import { recipeLoader } from '@/loaders/recipeLoader'
import Recipes from '@/pages/Recipe/Recipes'
import AboutUs from '@/pages/AboutUs/AboutUs'
import ContactUs from '@/pages/ContactUs/ContactUs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: (
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
      {
        path: '/recipes',
        element: <Recipes />,
      },
      {
        path: '/recipe/:recipeId',
        loader: recipeLoader,
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-recipes',
        element: (
          <PrivateRoute>
            <AddRecipe />
          </PrivateRoute>
        ),
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
    ],
  },
])
