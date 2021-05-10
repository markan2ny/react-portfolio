import React from 'react';
import ParticlesBG from './components/particles';
import Navbar from './components/particles/navbar/Navbar';
import Data from './data/Data';


function App() {
  return (
      <>
        <ParticlesBG/>
        <Navbar data={Data}/>
      </>
  )
}

export default App
