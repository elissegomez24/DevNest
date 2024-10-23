import './App.css';
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
