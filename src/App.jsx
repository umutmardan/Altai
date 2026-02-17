import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import RoomIllustrator from './components/RoomIllustrator';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <RoomIllustrator />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
