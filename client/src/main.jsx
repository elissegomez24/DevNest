import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup";
import Profile from "./pages/Profile";
import JobBoard from "./pages/jobBoard";
import JobDetails from "./pages/JobDetails";

const client = new ApolloClient({
  uri: "http://localhost:3001/graphql", // Replace with your actual GraphQL API endpoint
  cache: new InMemoryCache(),
});
// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile/:userId",
        element: <Profile />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/jobBoard",
        element: <JobBoard />,
      },
      {
        path: "/JobDetails/:jobId",
        element: <JobDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>
);
