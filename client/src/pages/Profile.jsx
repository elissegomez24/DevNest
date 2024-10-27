import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_ONE_USER = gql `
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
}`

export default function Profile() {
  const { userId } = useParams();
  console.log(userId);

  const { loading, error, data } = useQuery(GET_ONE_USER, {
    variables: { user:  userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile: {error.message}</p>;

  const { userName, posts } = data.oneUser;

  return (
    <>
      <div>
        <h1 className='pro'>Welcome {userName}</h1>
        <h2>Here's all of your posts!</h2>
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

