
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; 
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might be in another universe.</p>
        <img
          src="404.jpg"
          alt="Lost in Space"
          className="not-found-image"
          width={100}
          height={180}
        />
        <Link to="/" className="back-to-home-link">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
