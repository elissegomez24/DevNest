<<<<<<< HEAD
import './App.css';
=======
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import DevNestFooter from './components/Footer';
>>>>>>> be3cb93558d99ce6549875bd1fd2ae0348c606cb
import './index.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Nav from './components/NavTabs'; 
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <>
        <Nav />
        <main className="flex-column justify-center align-center min-100-vh bg-primary mx-3">
          <Outlet />
        </main>
      </>
    </ApolloProvider>
=======
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    <DevNestFooter />
    </>
>>>>>>> be3cb93558d99ce6549875bd1fd2ae0348c606cb
  );
}

export default App;