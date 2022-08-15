import React from 'react'
import { useLocation } from 'react-router-dom';

const Default = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
          <div className="display-3">404</div>
          <h1>error</h1>
          <h2>page not found</h2>
          <h3>requested url <span className='text-danger'>{location.pathname}</span>{" "} was not found</h3>
        </div>
      </div>
    </div>
  )
}

export default Default;
