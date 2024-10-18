import './App.css';
import './index.css';
<<<<<<< HEAD
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from './components/NavTabs'; 
=======
import './App.css';
>>>>>>> 3fb1994c0d5f30b4f37936687f5338c57c11d94f

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <Nav />
        <main className="flex-column justify-center align-center min-100-vh bg-primary mx-3">
          <Outlet />
        </main>
      </>
    </ApolloProvider>
  );
}

export default App;
