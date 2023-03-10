import React from 'react'
import '../styles/FlatHeader.scss'

function FlatHeader() {
  return (
    <div className="flat__header">
    <div className="flat__title">
      <h1 className="flat-page__title">
        Cozy loft on the Canal Saint-Martin
      </h1>
      <h2 className="flat-page__subtitle">Paris, Île-de-France</h2>
      <div className="flat__tags">
        <span>Cozy</span>
        <span>Canal</span>
        <span>Paris 10</span>
      </div>
    </div>
    <div className="flat__owner">
      <div className="flat__owner__details">
        <h3>Alexandre Dumas</h3>
        <div className="flat__owner__badge"></div>
      </div>
      <div className="flat__owner__stars">
        <span className="on">★</span>
        <span className="on">★</span>
        <span className="on">★</span>
        <span className="off">★</span>
        <span className="off">★</span>
      </div>
    </div>
  </div>
  )
}

export default FlatHeader