import { createBrowserRouter } from 'react-router-dom'
import App from '@/App'
import PrivateRoute from '@/routes/PrivateRoute'
import PublicRoute from '@/routes/PublicRoute'
import Home from '@/pages/Home/Home'
import SignIn from '@/pages/Auth/SignIn'
import Signup from '@/pages/Auth/Signup'
import AddRecipe from '@/pages/Recipe/AddRecipe'
import RecipeDetails from '@/pages/Recipe/RecipeDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/signin',
        element: (
          <PublicRoute>
            <SignIn />,
          </PublicRoute>
        ),
      },
      {
        path: '/signup',
        element: (
          <PublicRoute>
            <Signup />,
          </PublicRoute>
        ),
      },
      {
        path: '/recipes',
        element: (
          <PrivateRoute>
            <RecipeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/add-recipes',
        element: <AddRecipe />,
      },
    ],
  },
])
