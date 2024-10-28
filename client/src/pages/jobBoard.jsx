import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const { loading, error, data } = useQuery(GET_JOBS);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm, 'with filter:', filter);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Job Board</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search for jobs..."
        />
        <button className='sea' type="submit">Search</button>
        <ButtonGroup onFilterChange={handleFilterChange} />
      </form> 

      
      <JobCards jobs={data.Job}/>
    </div>
  );
};

const ButtonGroup = ({ onFilterChange }) => {
  return (
    <div className='filters' style={{ marginTop: '10px' }}>
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('full-time')}>Full-Time</button>
      <button onClick={() => onFilterChange('part-time')}>Part-Time</button>
      <button onClick={() => onFilterChange('remote')}>Remote</button>
    </div>
  );
};

export default JobBoard;