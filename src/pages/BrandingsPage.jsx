import React from 'react';
import Logofolio from '../components/Logofolio';
import Navbar from '../components/Navbar';
import CustomCursor from '../components/CustomCursor';
import '../index.css';

const BrandingsPage = () => {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Logofolio />
      </div>
    </div>
  );
};

export default BrandingsPage;
