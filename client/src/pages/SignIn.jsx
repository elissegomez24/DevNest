import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import AuthService from '../utils/auth';
import './signin.css';

// Define the SIGN_IN mutation
const SIGN_IN = gql`
mutation Mutation($username: String!, $password: String!) {
  login(userName: $username, password: $password) {
    user {
    _id
      userName
    }
    token
  }
}
`;

export default function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const [login] = useMutation(SIGN_IN);
  const navigate = useNavigate(); // Initialize useNavigate

 const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    if (!userName || !password) {
        setErrorMessage('You need to fill out all fields.');
        return;
    }
  
    try {
        const { data } = await login({ variables: { username: userName, password } });
  
        if (data && data.login && data.login.token) {
            console.log('User signed in:', data.login);
            const userId = data.login.user._id; // Extract userId
            localStorage.setItem('token', data.login.token); // Store token in local storage
            navigate(`/profile/${userId}`); // Navigate to Profile route
        } else {
            setErrorMessage('Invalid credentials, please try again.');
        }
    } catch (e) {
        console.error('Error signing in:', e);
        setErrorMessage('Error signing in, please try again.');
    }
};

  

  return (
    <div className='lin'>
      <div className='log'>
        <h1>Login</h1>
      </div>

      <div className='login'>
        <form onSubmit={handleSubmit}>
          <div className="lg">
            <label htmlFor="username">Enter Username</label>
            <input
              type="text"
              id="username"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="lg">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='in' type="submit">Sign In</button>
          {errorMessage && <p className='error'>{errorMessage}</p>} {/* Display error message */}
        </form>
      </div>

      <div className='signup'>
        <p>Don’t have an account? </p>
        <button className='up' onClick={() => navigate('/Signup')}>Sign-up</button> {/* Navigate to Sign-Up */}
      </div>
    </div>
  );
}
