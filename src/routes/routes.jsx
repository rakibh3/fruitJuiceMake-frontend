import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layout/MainLayout'
import ErrorPage from '@/error/ErrorPage'
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
import DashboardLayout from '@/layout/DashboardLayout'
import Overview from '@/pages/Dashboard/Overview/Overview'
import Profile from '@/pages/Dashboard/Profile/Profile'
import Settings from '@/pages/Dashboard/Settings/Settings'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Overview />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
])
