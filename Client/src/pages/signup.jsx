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
    }
  }
`;

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [addUser, { error }] = useMutation(SIGN_UP);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const { data } = await addUser({ variables: { userName, password } });
      console.log('User signed up:', data.addUser);
      // Optionally, redirect or show success message here
    } catch (e) {
      console.error('Error signing up:', e);
    }
  };

  return (
    <>
      <div>
        <h1>Sign-Up!</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username: (Username)</label>
          <input
            type="text"
            id="username"
            name="user_name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)} // Update state on input change
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: (********)</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
        </div>
        <button className='signin' type="submit">Sign Up</button>
        {error && <p>Error: {error.message}</p>} {/* Display any error */}
      </form>
    </>
  );
}
