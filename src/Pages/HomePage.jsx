import React from 'react';
import '../styles/HomePage.scss';
import Banner from '../components/Banner.jsx';
import FlatGallery from '../components/FlatGallery.jsx';



function HomePage() {
  // Creation de la HomePage avec les composants Banner && FlatGallery
  return (
    <>
        <Banner />
        <FlatGallery />
    </>
  );
}

export default HomePage; 