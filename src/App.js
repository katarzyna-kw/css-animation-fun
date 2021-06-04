import React from 'react';
import './App.css';
import Amelia from './components/Amelia'
import Karoline from './components/Karoline'
import Julia from './components/Julia'
import Rainbow from './components/Rainbow';
import Colorful from './components/Colorful'
import Gradient from './components/Gradient'
import Puffy from './components/Puffy'
import Text from './components/Text'

function App() {
  return (
  <div className="container">
    <Amelia />
    <Karoline />
    <Julia />
    <Rainbow />
    <Gradient />
    <Colorful />
    <Puffy />
    </div>
  );
}

export default App;
