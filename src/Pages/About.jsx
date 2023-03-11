import React from 'react'
import ImageBanner from '../components/ImageBanner.jsx'
import DescriptionPanel from '../components/DescriptionPanel'
import '../styles/About.scss'

function About() {
  return (
    <>
    <ImageBanner />
    <section className='about__container'>
    <DescriptionPanel />
    <DescriptionPanel />
    <DescriptionPanel />
    <DescriptionPanel />
    </section>
    </>
  )
}

export default About