import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({loggedIn}) {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Jobs"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          Jobs
        </Link>
      </li>
      {loggedIn ? (
      <li className="nav-item">
        <Link
          to="/Profile"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Profile' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </Link>
      </li>
      ) : (

        <Link
          to="/SignIn"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/SignIn' ? 'nav-link active' : 'nav-link'}
        >
          SignIn
        </Link>
      )}
      
    </ul>
  );
}

export default NavTabs;
