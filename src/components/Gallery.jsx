import React from 'react';
import '../styles/Gallery.css';
import Apartment from './Apartment.jsx';

function Gallery() {
  return (
    <section className='grid'>
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
      <Apartment />
    </section>
  )
}

export default Gallery