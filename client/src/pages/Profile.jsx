import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_USER_PROFILE = gql`
  query GetUserProfile($userId: ID!) {
    oneUser(user: $userId) {
      userName
      posts {
        _id
        title
        text
      }
    }
  }
`;

export default function Profile() {
  const { userId } = useParams();

  const { loading, error, data } = useQuery(GET_USER_PROFILE, {
    variables: { userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile: {error.message}</p>;

  const { userName, posts } = data.oneUser;

  return (
    <>
      <div>
        <h1 className='pro'>Profile Page</h1>
        <h2>{userName}s Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

