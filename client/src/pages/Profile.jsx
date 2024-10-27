import { gql, useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { SIGN_OUT } from '../utils/mutations'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GET_ONE_USER = gql`
query OneUser($user: ID!) {
  oneUser(user: $user) {
    _id
    userName
    posts {
      _id
      text
      title
    }
    skills
    pfp
  }
}`;

export default function Profile({ onLogout }) {
  const { userId } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate


  const { loading, error, data } = useQuery(GET_ONE_USER, {
    variables: { user: userId },
  });

  const [signOut] = useMutation(SIGN_OUT, {
    onCompleted: () => {

      console.log(onLogout());
      
      onLogout(); // Call the onLogout prop to handle the logout
    },
    onError: (err) => {
      console.error("Logout error:", err);
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile: {error.message}</p>;

  const { userName, posts } = data.oneUser;

  return (
    <div>
      <h1 className='pro'>Welcome {userName}</h1>
      <h2>Heres all of your posts!</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => {
    signOut();
    navigate('/Signin');
}}>
    Log out
</button>

    </div>
  );
}
