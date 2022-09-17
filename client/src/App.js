import React from 'react'
import './App.css';
import { Entry } from './components';
import { Navbar, TrackCard } from './container';

function App() {

  return (
    <>
      <Navbar />
      <TrackCard />
      <Entry />
    </>
  );
}

export default App;
