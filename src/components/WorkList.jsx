import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import WorkerItem from './WorkItem';


const WorkerList = () => {
    const [workers, setWorkers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('');
  
    useEffect(() => {
    
      fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
        .then((response) => response.json())
        .then((data) => setWorkers(data))
        .catch((error) => console.error('Error fetching workers:', error));
    }, []);

    // console.log(data);
  
    const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (departmentFilter === '' || worker.department.toLowerCase() === departmentFilter.toLowerCase())
  );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search workers..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
         <input
        type="text"
        placeholder="Filter by department..."
        onChange={(e) => setDepartmentFilter(e.target.value)}
      />
        {filteredWorkers.map((worker) => (
          <WorkerItem key={worker.id} worker={worker} />
        ))}
      </div>
    );
  };
  
  export default WorkerList;