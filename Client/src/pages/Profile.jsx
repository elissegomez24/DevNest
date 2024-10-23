// import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/proflies'; // Adjust the path as necessary
import profilepic from "../assets/pics/profile.png";

export default function Profile({ userId }) {
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { userId },
  });

  if (loading) return <div>Loading...</div>;
  console.log('wtf');
  if (error) return <div>Error: {error.message}</div>;

  const profile = data.user; // Adjust based on your GraphQL schema
console.log('no data');
  return (
    <div className="profile">
      <h1>Profile</h1>
      <img src={profilepic} alt="Profile" />
      
      {profile && (
        <div className="work col-md-6 col-sm-12 border text-center pt-3 pb-4">
          <h3>{profile.userName}</h3>
          <h3>{profile.skills.join(', ')}</h3>
          <h3>{profile.posts.length} Posts</h3>
        </div>
      )}
    </div>
  );
}
