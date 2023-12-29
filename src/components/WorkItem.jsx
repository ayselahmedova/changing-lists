// import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WorkerItem = ({ worker }) => {

    console.log(worker)
    return (
    <div className='worker'>
      <p><span className='black'>Name:</span> {worker.name}</p>
      <p><span className='black'>Department:</span> {worker.department}</p>
      <p><span className='black'>Position:</span> {worker.role}</p>
    </div>
  )};
  
  WorkerItem.propTypes = {
    worker: PropTypes.object.isRequired,
  };

  export default WorkerItem;