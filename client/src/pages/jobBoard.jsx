// // src/App.js
// import { useState } from 'react';

// const App = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filter, setFilter] = useState('all');

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleFilterChange = (newFilter) => {
//     setFilter(newFilter);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically trigger a search function
//     console.log('Searching for:', searchTerm, 'with filter:', filter);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           placeholder="Search for jobs..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       <ButtonGroup onFilterChange={handleFilterChange} />
//       {/* Here you would render your job listings based on searchTerm and filter */}
//     </div>
//   );
// };

// const ButtonGroup = ({ onFilterChange }) => {
//   return (
//     <div style={{ marginTop: '10px' }}>
//       <button onClick={() => onFilterChange('all')}>All</button>
//       <button onClick={() => onFilterChange('full-time')}>Full-Time</button>
//       <button onClick={() => onFilterChange('part-time')}>Part-Time</button>
//       <button onClick={() => onFilterChange('remote')}>Remote</button>
//     </div>
//   );
// };

// export default App;
