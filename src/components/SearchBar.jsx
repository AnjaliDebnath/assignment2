import React from 'react';
import './SearchBar.css';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdMyLocation } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="search-bar">
      {/* Job Search Input */}
      <div className="input-container">
        <span className="icon"><CiSearch /></span>
        <input
          type="text"
          placeholder="Search by: Job title, Position, Keyword..."
          className="input-field"
        />
      </div>

      {/* Location Input */}
      <div className="input-container">
        <span className="icon"><CiLocationOn /></span>
        <input
          type="text"
          placeholder="City, state or country"
          className="input-field"
        />
      </div>
      <MdMyLocation />
      
      {/* Find Job Button */}
      <button className="find-job-button">Find Job</button>
    </div>
  );
};

export default SearchBar;
