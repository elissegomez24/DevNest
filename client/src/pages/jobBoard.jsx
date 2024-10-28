import JobCards from "../components/JobCards";
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import './jobBoard.css';

'use client'

const GET_JOBS = gql`
 query Job {
  Job {
    _id
    name
    pay
  }
}
`;

const JobBoard = () => {

  const { loading, error, data } = useQuery(GET_JOBS);

  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Job Board</h1>
      
      <JobCards jobs={data.Job}/>
    </div>
  );
};



export default JobBoard;