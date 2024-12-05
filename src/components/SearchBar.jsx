import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Job Search Input */}
      <div className="input-container">
        <span className="icon">🔍</span>
        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          className="input-field"
        />
      </div>

      {/* Location Input */}
      <div className="input-container">
        <span className="icon">📍</span>
        <input
          type="text"
          placeholder="City, state or country"
          className="input-field"
        />
      </div>

      {/* Find Job Button */}
      <button className="find-job-button">Find Job</button>
    </div>
  );
};

export default SearchBar;
