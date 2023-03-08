import React from 'react';
import Navbar from './components/Navbar.jsx';
import './styles/App.css';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <Gallery />
      </Main>
      <Footer />
    </div>
  )
}

export default App;