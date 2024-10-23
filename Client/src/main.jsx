import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import SignUp from './pages/Signup';
import ApolloProvider from './ApolloProvider'; // Import the ApolloProvider

// Define the accessible routes
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
      {
        path: '/Signup',
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider>
    <RouterProvider router={router} />
  </ApolloProvider> 
);
