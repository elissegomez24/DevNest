import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import './signup.css';

// Define the SIGN_UP mutation
const SIGN_UP = gql`
  mutation addUser($userName: String!, $password: String!) {
    addUser(userName: $userName, password: $password) {
      _id
      userName
      password
    }
  }
`;

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [addUser, { error }] = useMutation(SIGN_UP);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { 
          userName, 
          password 
        },
      });
      console.log('User signed up successfully:', data.addUser);
      // Add navigation after successful signup
    } catch (err) {
      console.error('Signup error details:', err.networkError?.result?.errors || err.message);
    }
  };

  return (
    <>
      <div>
        <h1>Sign-Up!</h1>
      </div>
      <form className='for' onSubmit={handleSubmit}>
        <div className="su">
          <label htmlFor="username">Create Username</label>
          <input
            type="text"
            id="username"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="su">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button className='signin' type="submit">Sign Up</button>
        {error && <p>Error: {error.message}</p>} {/* Display any error */}
      </form>
    </>
  );
}