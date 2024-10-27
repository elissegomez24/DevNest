import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AuthService from '../utils/auth';
import './signin.css';



// Define the SIGN_IN mutation
const SIGN_IN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        userName
      }
    }
  }
`;

export default function SignIn() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [login, { error }] = useMutation(SIGN_IN);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { userName, password } });
      // Use the imported login method from AuthService
      AuthService.login(data.login.token);
      // No need for manual navigation since Auth.login handles it
    } catch (e) {
      console.error('Error signing in:', e);
    }
  };

  return (
    <div className='lin'>
      <div>
        <h1>Login</h1>
      </div>

      <div className='login'>
        <form onSubmit={handleSubmit}>
          <div className="lg">
            <label htmlFor="username">Username: (Username)</label>
            <input
              type="text"
              id="username"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="lg">
            <label htmlFor="password">Password: (********)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='in' type="submit">Sign In</button>
          {error && <p>Error: {error.message}</p>}
        </form>
      </div>

      <div className='signup'>
        <p>Don’t have an account? </p>
        <button className='up' onClick={() => navigate('/Signup')}>Sign-up</button> {/* Navigate to Sign-Up */}
      </div>
    </div>
  );
}