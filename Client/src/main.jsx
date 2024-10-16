import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/Profile',
        element: <Profile />,
      },
      {
        path: '/Jobs',
        element: <Jobs />,
      },
      {
        path: '/SignIn',
        element: <SignIn />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
