import React from 'react';
import Bussiness from '../Bussiness/Bussiness';
import Footer from '../Footer/Footer';
import './home.css';
const Home = () => {
  return (
    <div>
      <div className="homebody">
        <Bussiness />
        <Bussiness />
        <Bussiness />
        <Bussiness />
        <Bussiness />
        <Bussiness />
      </div>
      <Footer />
    </div>);
};

export default Home;