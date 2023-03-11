import React from 'react';
import '../styles/FlatGallery.scss';
import Apartment from './Apartment.jsx';

function FlatGallery() {
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

export default FlatGallery