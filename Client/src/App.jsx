import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import DevNestFooter from './components/Footer';
import './index.css';
import './App.css';


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    <DevNestFooter />
    </>
  );
}

export default App;