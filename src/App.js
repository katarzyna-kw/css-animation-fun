import React from 'react';
import './App.css';
import Amelia from './components/Amelia'
import Karoline from './components/Karoline'
import Julia from './components/Julia'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Amelia />
        <Karoline />
        <Julia />
    </div>
  );
}

export default App;
