import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import JobCard from '../components/JobCard';

import SearchBar from '../components/SearchBar';


const Home = () => {
  return (
    <>
    <Navbar/>
    <SearchBar />
<JobCard/>
    
    <Footer/>
    </>
  );
}

export default Home;
