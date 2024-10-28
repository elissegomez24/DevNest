import { gql, useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { SIGN_OUT } from "../utils/mutations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ADD_SKILL } from "../utils/mutations"; // Import the ADD_SKILL mutation

import "./profile.css";

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
      onLogout(); 
    },
    onError: (err) => {
      console.error("Logout error:", err);
    },
  });

  const [addSkill] = useMutation(ADD_SKILL, {
    onCompleted: (data) => {
      console.log("Skill added:", data.addSkill);
      // Optionally, you can update the user skills in your local state or refetch
    },
    onError: (err) => {
      console.error("Error adding skill:", err);
    },
  });

  const [skills, setSkills] = useState("");

  const handleSkillSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSkill({ variables: { userId, skill: skills } });
      console.log(skills); // Call the mutation with userId and skills
      setSkills(""); // Clear the input after submission
    } catch (err) {
      console.error("Error submitting skills:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching profile: {error.message}</p>;

  const { userName, posts } = data.oneUser;

  return (
    <div className="pro">
      <h1>Welcome {userName}</h1>
      <div className="post">
        <h2>Here are all of your posts!</h2>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="skill">
        <h2>Add Your Skills</h2>
        <form onSubmit={handleSkillSubmit}>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter your skills"
          />
          <button type="submit">Submit Skills</button>
        </form>
        <div className="skills">
          <h2>Your Skills</h2>
          <ul>
            {data.oneUser.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <button onClick={() => {
          signOut();
          navigate('/Signin');
        }}>
          Log out
        </button>
      </div>
    </div>
  );
}