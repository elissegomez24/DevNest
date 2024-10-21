import { useEffect, useState } from 'react';
import profilepic from "../assets/pics/profile.png";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/utils/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Include authorization header if needed
            // 'Authorization': `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
